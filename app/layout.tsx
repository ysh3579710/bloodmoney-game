import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: 'Blood Money Game - Official Site & Play Online',
  description: 'Blood Money is more than just a clicker. It’s a haunting psychological experience where every action comes at a price – both in money and in conscience.',
  keywords: 'Blood Money, game, survival, moral choices, indie game',
  authors: [{ name: 'Blood Money Game Studio' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Blood Money Game - Official Site & Play Online',
    description: 'Blood Money is more than just a clicker. It’s a haunting psychological experience where every action comes at a price – both in money and in conscience.',
    url: siteUrl,
    siteName: 'Blood Money Game',
    images: [
      {
        url: `${siteUrl}/social-card.png`,
        width: 1200,
        height: 630,
        alt: 'Blood Money Game - Official Site & Play Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blood Money Game - Official Site & Play Online',
    description: 'Blood Money is more than just a clicker. It’s a haunting psychological experience where every action comes at a price – both in money and in conscience.',
    images: [`${siteUrl}/social-card.png`],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
