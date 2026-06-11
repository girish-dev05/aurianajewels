import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Studio Auriana - Luxury Artificial Jewellery | Kundan, Polki & Moissanite',
  description: 'Discover exquisite artificial jewellery collections from Studio Auriana. Premium Kundan, Polki, and Moissanite designs for weddings and festive occasions.',
  keywords: 'artificial jewellery, kundan, polki, moissanite, wedding jewellery, Indian fashion',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" style={geist.style}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
