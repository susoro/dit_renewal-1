import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

export const metadata: Metadata = {
  title: 'DIT 홈페이지',
  description: '디아이티 홈페이지 입니다',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  )
}
