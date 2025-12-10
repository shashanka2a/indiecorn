# IndieCorn - Next.js 15 Production App

A production-ready Next.js 15 application with Tailwind CSS v3, SEO optimization, and Lucide icon favicon.

## Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS v3
- ✅ SEO meta tags (Open Graph, Twitter Cards)
- ✅ Lucide React icons
- ✅ TypeScript
- ✅ Responsive design
- ✅ Production-ready configuration

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
indiecorn/
├── app/
│   ├── components/       # React components
│   ├── data.ts          # Data constants
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Home page
│   ├── favicon.svg      # Favicon (Lucide Rocket icon)
│   ├── icon.svg         # App icon
│   └── apple-icon.svg   # Apple touch icon
├── scripts/             # Utility scripts
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## SEO Features

The app includes comprehensive SEO meta tags:
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured metadata
- Canonical URLs
- Robots directives

## Icons

The favicon uses a Lucide Rocket icon, automatically detected by Next.js 15 from:
- `app/favicon.svg` - Main favicon
- `app/icon.svg` - App icon
- `app/apple-icon.svg` - Apple touch icon

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (via Next.js Google Fonts)

## License

© 2025 IndieCorn.xyz




