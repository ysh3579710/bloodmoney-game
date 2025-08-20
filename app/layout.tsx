import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloodmoney-game.online'
const measurementId = process.env.NEXT_PUBLIC_GA_ID || 'G-2RMQG65RGH'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: 'https://www.bloodmoney-game.online/',
  },
  title: 'Blood Money Game - Official Site & Play Online',
  description: 'Blood Money is more than just a clicker. It’s a haunting psychological experience where every action comes at a price – both in money and in conscience.',
  keywords: 'Blood Money, game, survival, moral choices, indie game',
  authors: [{ name: 'Blood Money Game Studio' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
        {/* Google AdSense */}
        <Script
          id="adsbygoogle-init"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5738971320066006"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
