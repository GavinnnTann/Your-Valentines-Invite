import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Em Là Valentine Của Anh 💕",
  description: 'Một thông điệp Valentine đặc biệt dành cho người con gái tuyệt vời nhất',
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
