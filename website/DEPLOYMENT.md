# Deployment Guide

This guide covers deploying the Founders Kit website to various hosting platforms.

## Prerequisites

Before deploying, ensure:

- Code is committed to a Git repository (GitHub, GitLab, Bitbucket)
- All tests pass locally: `npm run build`
- Environment variables are configured (if any)

## Platform Options

### 1. Vercel (Recommended)

Vercel is the easiest option for Next.js deployments with zero configuration.

#### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `website`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Click "Deploy"

#### Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to website directory
cd website

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify

Netlify offers excellent Next.js support with automatic deployments.

#### Via Netlify Dashboard

1. Go to [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider
4. Configure:
   - **Base directory:** `website`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Functions directory:** (leave empty)
5. Add build settings:
   ```
   [build]
     base = "website"
     command = "npm run build"
     publish = ".next"
   ```
6. Click "Deploy site"

#### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to website directory
cd website

# Build
npm run build

# Deploy
netlify deploy --prod
```

---

### 3. AWS Amplify

AWS Amplify provides full-stack hosting with CI/CD.

#### Setup

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - cd website
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: website/.next
       files:
         - '**/*'
     cache:
       paths:
         - website/node_modules/**/*
   ```
5. Save and deploy

---

### 4. DigitalOcean App Platform

Deploy with automatic HTTPS and scaling.

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your repository
4. Configure:
   - **Type:** Web Service
   - **Source Directory:** `website`
   - **Build Command:** `npm run build`
   - **Run Command:** `npm start`
   - **Environment Variables:** (if needed)
5. Choose instance size
6. Launch app

---

### 5. Self-Hosted (VPS/Server)

Deploy to your own server with Node.js.

#### Prerequisites

- Server with Node.js 18+ installed
- PM2 or similar process manager
- Nginx (optional, for reverse proxy)

#### Steps

```bash
# 1. Clone repository on server
git clone https://github.com/yourusername/founders-kit.git
cd founders-kit/website

# 2. Install dependencies
npm ci --production

# 3. Build
npm run build

# 4. Install PM2
npm install -g pm2

# 5. Start with PM2
pm2 start npm --name "founders-kit" -- start

# 6. Save PM2 configuration
pm2 save
pm2 startup
```

#### Nginx Configuration (Optional)

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### 6. Docker Deployment

Deploy using Docker containers.

#### Create Dockerfile

Create `website/Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run

```bash
# Build image
docker build -t founders-kit .

# Run container
docker run -p 3000:3000 founders-kit
```

---

## Environment Variables

If your app needs environment variables, add them to your hosting platform:

### Vercel
```bash
vercel env add VARIABLE_NAME
```

### Netlify
- Go to Site settings → Environment variables
- Add key-value pairs

### Other Platforms
- Check platform documentation for environment variable configuration

---

## Custom Domain Setup

### DNS Configuration

Point your domain to your hosting provider:

**Vercel/Netlify:**
- Add CNAME record: `www` → `yourapp.vercel.app`
- Add A record for apex domain (provided by host)

**DigitalOcean:**
- Add A record pointing to app's IP
- Add CNAME for www

**Self-hosted:**
- Add A record pointing to your server's IP

### SSL Certificate

Most platforms provide automatic SSL certificates:

- **Vercel/Netlify:** Automatic Let's Encrypt
- **AWS Amplify:** AWS Certificate Manager
- **Self-hosted:** Use Certbot for Let's Encrypt

```bash
# Certbot example
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Continuous Deployment

### Automatic Deployments

Most platforms support automatic deployments on Git push:

1. **Vercel/Netlify:** Automatic on push to main branch
2. **AWS Amplify:** Configure branch auto-detection
3. **Self-hosted:** Set up Git hooks or CI/CD pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install and Build
        working-directory: ./website
        run: |
          npm ci
          npm run build
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

## Performance Optimization

### Build Optimization

```bash
# Analyze bundle size
npm run build

# Check for unused dependencies
npx depcheck
```

### Caching

Most platforms handle caching automatically. For self-hosted:

- Enable Nginx caching
- Use CDN (Cloudflare, CloudFront)
- Configure appropriate cache headers

---

## Monitoring & Analytics

### Vercel Analytics

Enable in Vercel dashboard → Analytics tab

### Google Analytics

Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// Add in layout
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

### Error Tracking

Consider integrating:
- Sentry
- LogRocket
- Datadog

---

## Rollback Procedure

### Vercel/Netlify

1. Go to Deployments
2. Find previous successful deployment
3. Click "Promote to Production"

### Self-hosted

```bash
# Revert to previous commit
git revert HEAD
git push

# Or rollback to specific version
pm2 reload founders-kit
```

---

## Troubleshooting

### Build Failures

```bash
# Check build locally
npm run build

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Issues

1. Check build logs in platform dashboard
2. Verify environment variables
3. Ensure Node.js version matches (18+)
4. Check memory limits on hosting plan

### Performance Issues

1. Enable compression in Next.js config
2. Optimize images
3. Use CDN for static assets
4. Enable caching headers

---

## Security Checklist

- [ ] SSL certificate configured
- [ ] Environment variables secured
- [ ] Dependencies updated
- [ ] Security headers configured
- [ ] Rate limiting enabled (if needed)
- [ ] CORS configured properly

---

## Post-Deployment

1. **Test the deployed site:**
   - Check all pages load
   - Test search functionality
   - Verify mobile responsiveness
   - Test all external links

2. **Monitor performance:**
   - Page load times
   - Core Web Vitals
   - Error rates

3. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools

4. **Set up uptime monitoring:**
   - UptimeRobot
   - Pingdom
   - StatusCake

---

## Support

- **Documentation:** [Next.js Deployment](https://nextjs.org/docs/deployment)
- **Issues:** [GitHub Issues](https://github.com/avinash201199/founders-kit/issues)
- **Community:** [Discussions](https://github.com/avinash201199/founders-kit/discussions)

---

**Happy Deploying! 🚀**