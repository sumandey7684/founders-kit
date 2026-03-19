# Founders Kit Website

A production-ready Next.js 14 website that transforms the Founders Kit README into a modern, searchable, and responsive web application.

## 🎯 What Is This?

This website showcases **500+ curated startup resources** from the Founders Kit repository in an organized, searchable, and user-friendly interface. Instead of scrolling through a long README, founders can now:

- **Search** resources in real-time
- **Browse** by categories
- **Filter** instantly on the client-side
- **Access** resources on any device

## ✨ Features

✅ **Real-time Search** - Find resources instantly as you type  
✅ **20+ Categories** - Organized by topic (Learning, Tools, AI, Marketing, etc.)  
✅ **500+ Resources** - Books, tools, courses, platforms, and more  
✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards  
✅ **Fast & Lightweight** - Only 95KB first load JS  
✅ **Production Ready** - Built with Next.js 14, TypeScript, and Tailwind CSS  

## 🚀 Quick Start

```bash
# Navigate to the website directory
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

That's it! The site should be running locally. 🎉

## 📖 Documentation

Complete documentation is available in the `website/` directory:

- **[INDEX.md](./website/INDEX.md)** - Navigation hub for all documentation
- **[QUICKSTART.md](./website/QUICKSTART.md)** - 5-minute setup guide
- **[README.md](./website/README.md)** - Full project documentation
- **[STRUCTURE.md](./website/STRUCTURE.md)** - Architecture and file organization
- **[DEPLOYMENT.md](./website/DEPLOYMENT.md)** - Deployment guide (Vercel, Netlify, AWS, etc.)
- **[SUMMARY.md](./website/SUMMARY.md)** - High-level project overview

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel, Netlify, AWS, or self-hosted

## 📁 Structure

```
website/
├── app/              # Next.js 14 App Router pages
├── components/       # React components (Navbar, Hero, Search, etc.)
├── data/            # Structured resource data (resources.ts)
├── public/          # Static assets
└── [docs]           # Comprehensive documentation
```

## 🎨 Components

The website is built with 6 modular components:

1. **Navbar** - Sticky navigation with smooth scroll
2. **Hero** - Landing section with CTAs
3. **Search** - Real-time resource filtering
4. **CategorySection** - Displays resources by category
5. **ResourceCard** - Individual resource display
6. **Footer** - Links and attribution

## 📊 Build Stats

```
Route (app)                    Size     First Load JS
┌ ○ /                         8.58 kB        95.7 kB
└ ○ /_not-found              873 B            88 kB

○  (Static)  prerendered as static content
```

**Result:** Production-ready, optimized build ✅

## 🌐 Deployment

Deploy in minutes to:

- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - Automatic deployments on push
- **AWS Amplify** - Full-stack AWS hosting
- **DigitalOcean** - App Platform with auto-scaling
- **Self-hosted** - VPS with Node.js

See [DEPLOYMENT.md](./website/DEPLOYMENT.md) for detailed instructions.

## 🎯 Use Cases

### For Founders
- Quickly find tools for specific needs
- Bookmark useful resources
- Explore different categories
- Share specific resources with team

### For Contributors
- Easy to add new resources
- Simple data structure
- Type-safe codebase
- Well-documented code

### For Developers
- Learn from production-ready Next.js code
- Study component architecture
- Reference TypeScript patterns
- Understand Tailwind CSS usage

## 📝 Adding Resources

Adding new resources is simple:

1. Edit `website/data/resources.ts`
2. Add your resource to the array:
   ```typescript
   {
     title: "Your Resource",
     link: "https://example.com",
     category: "Category Name",
     description: "Brief description"
   }
   ```
3. Rebuild and deploy

Categories are automatically updated based on the data.

## 🎨 Customization

### Colors
Edit `website/tailwind.config.ts` to change the primary color scheme.

### Content
Edit `website/data/resources.ts` to add, remove, or modify resources.

### SEO
Edit `website/app/layout.tsx` to update meta tags and descriptions.

## 🔥 Live Demo

Once deployed, your site will include:
- Homepage with hero section
- Search bar with instant filtering
- 20+ category sections
- 500+ resource cards
- Responsive footer

## 📈 Performance

- **Lighthouse Score:** 90+ (expected)
- **First Load:** < 96KB
- **Build Time:** < 30 seconds
- **Static Generation:** All pages pre-rendered

## 🔒 Security

✅ No backend or database required  
✅ No API keys or secrets  
✅ All external links use `noopener noreferrer`  
✅ TypeScript prevents type errors  
✅ Regular dependency updates  

## ♿ Accessibility

✅ Semantic HTML  
✅ ARIA labels  
✅ Keyboard navigation  
✅ Focus states  
✅ Color contrast  
✅ Screen reader friendly  

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

See [QUICKSTART.md](./website/QUICKSTART.md) for more troubleshooting tips.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Add your resources or improvements
4. Test locally (`npm run build`)
5. Submit a pull request

See [CONTRIBUTING](./CONTRIBUTING.md) guidelines for details.

## 📞 Support

- **Documentation:** See `website/` directory
- **Issues:** [GitHub Issues](https://github.com/avinash201199/founders-kit/issues)
- **Discussions:** [GitHub Discussions](https://github.com/avinash201199/founders-kit/discussions)
- **Contact:** [@AvinashSingh_20](https://x.com/AvinashSingh_20)

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Credits

**Created by:** [Avinash Singh](https://x.com/AvinashSingh_20)  
**Built with:** Next.js 14, React 18, TypeScript, Tailwind CSS  
**For:** Startup founders and entrepreneurs worldwide  

---

## 🔗 Quick Links

### Get Started
- [Quick Start Guide](./website/QUICKSTART.md) - Setup in 5 minutes
- [Documentation Index](./website/INDEX.md) - Navigate all docs
- [Project Structure](./website/STRUCTURE.md) - Understand the code

### Deploy
- [Deployment Guide](./website/DEPLOYMENT.md) - Deploy to production
- [Vercel Setup](./website/DEPLOYMENT.md#1-vercel-recommended)
- [Netlify Setup](./website/DEPLOYMENT.md#2-netlify)

### Development
- [Homepage](./website/app/page.tsx) - Main page component
- [Components](./website/components/) - React components
- [Resources Data](./website/data/resources.ts) - Add/edit resources

---

## 🎯 Next Steps

1. **Setup locally:** Run `cd website && npm install && npm run dev`
2. **Customize:** Update colors, add your resources
3. **Deploy:** Push to GitHub and deploy to Vercel
4. **Share:** Let founders discover this resource!

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** March 2026  
**Built with:** ❤️ for the startup community  

---

**Ready to launch?** → [Start with QUICKSTART.md](./website/QUICKSTART.md)