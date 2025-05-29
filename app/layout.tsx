import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/react'

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
        {/* Pretendard Variable 폰트 - 동적 서브셋 */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        {/* Pretendard 기본 폰트 - 윈도우 호환성 향상 */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        {/* 구글 폰트에서 Noto Sans KR - 추가 fallback */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  )
}
