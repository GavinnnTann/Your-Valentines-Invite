import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "You're My Valentine 💕",
  description: 'A special Valentine\'s Day message for someone extraordinary',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
