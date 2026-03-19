# Founders Kit Website

A modern, responsive website built with Next.js 14 and Tailwind CSS that showcases the curated collection of startup resources from the Founders Kit repository.

## Features

- 🎨 Clean, developer-friendly UI
- 📱 Fully responsive design
- 🔍 Real-time search functionality
- ⚡ Fast performance with Next.js 14 App Router
- 🎯 Organized by categories
- 🔗 500+ curated resources
- 💅 Styled with Tailwind CSS
- 📦 TypeScript support

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Navigate to the website directory:

```bash
cd website
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
website/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage with search and categories
├── components/
│   ├── Navbar.tsx           # Navigation bar with smooth scrolling
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Search.tsx           # Search input with filtering
│   ├── CategorySection.tsx  # Category display component
│   ├── ResourceCard.tsx     # Individual resource card
│   └── Footer.tsx           # Footer with links
├── data/
│   └── resources.ts         # Structured resource data
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Technologies

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** Custom components (no external UI library)

## Features Breakdown

### Search

- Client-side filtering by resource name, description, and category
- Real-time results
- Clear search functionality
- Result count display

### Categories

- 20+ organized categories
- Smooth scroll navigation
- Responsive grid layout
- Clean sectioning

### Resource Cards

- Title, description, and link
- External link indicator
- Hover effects
- Consistent styling

### Responsive Design

- Mobile-first approach
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

## Customization

### Colors

Edit `tailwind.config.ts` to change the primary color scheme:

```typescript
colors: {
  primary: {
    // Customize these values
  },
}
```

### Data

Update `data/resources.ts` to add, remove, or modify resources:

```typescript
export const resources: Resource[] = [
  {
    title: "Your Resource",
    link: "https://example.com",
    category: "Your Category",
    description: "Description here"
  },
  // ...
];
```

## SEO

The site includes comprehensive SEO metadata:

- Title and description
- Open Graph tags
- Twitter Card tags
- Keywords
- Robots meta tags

Edit these in `app/layout.tsx`.

## Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Supports Next.js
- **AWS Amplify**: Full-stack deployment
- **Self-hosted**: Using Node.js server

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Contributing

To add new resources:

1. Edit `data/resources.ts`
2. Add your resource to the array
3. Test locally
4. Submit a pull request

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

## Credits

Created by [Avinash Singh](https://x.com/AvinashSingh_20)

Built with ❤️ for the startup community