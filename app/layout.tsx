import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IndieCorn - Indie today. Unicorn tomorrow.',
  description: 'Building the future, one indie project at a time. Startup studio empowering indie founders to build the next generation of unicorns with AI-powered tools and community support.',
  keywords: ['indiecorn', 'startup studio', 'indie founders', 'AI startups', 'unicorn', 'indie development', 'startup tools'],
  authors: [{ name: 'IndieCorn' }],
  creator: 'IndieCorn',
  publisher: 'IndieCorn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://indiecorn.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://indiecorn.xyz',
    title: 'IndieCorn - Indie today. Unicorn tomorrow.',
    description: 'Building the future, one indie project at a time. Startup studio empowering indie founders to build the next generation of unicorns.',
    siteName: 'IndieCorn',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IndieCorn - Startup Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndieCorn - Indie today. Unicorn tomorrow.',
    description: 'Building the future, one indie project at a time. Startup studio empowering indie founders.',
    images: ['/og-image.png'],
    creator: '@indiecorn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Icons are automatically detected from app/icon.svg, app/apple-icon.svg, and app/favicon.ico
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

