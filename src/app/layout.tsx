import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kisah Kita Organizer - Organizing the Story of Your Life',
  description: 'Event organizing service company that accompanies and arranges every important moment in your life, from the first second of life to the final rest.',
  keywords: 'event organizer, wedding, birthday, graduation, family gathering, Indonesia, Bandung, Bali',
  authors: [{ name: 'Kisah Kita Organizer' }],
  openGraph: {
    title: 'Kisah Kita Organizer - Organizing the Story of Your Life',
    description: 'Event organizing service company that accompanies and arranges every important moment in your life.',
    type: 'website',
    locale: 'en_US',
  },
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
