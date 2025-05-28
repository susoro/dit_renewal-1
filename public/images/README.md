# DIT 웹사이트 이미지 가이드

이 폴더는 DIT 유지보수 웹사이트에서 사용되는 모든 이미지 파일들을 포함합니다.

## 폴더 구조

```
public/images/
├── backgrounds/          # 배경 이미지들
├── icons/               # 아이콘 파일들
├── logos/               # 로고 파일들
├── services/            # 서비스 관련 이미지들
├── team/                # 팀 멤버 사진들
├── clients/             # 고객사 로고들
└── certifications/      # 인증서 이미지들
```

## 필요한 이미지 파일들

### 배경 이미지 (backgrounds/)
- `hero-bg.jpg` - 메인 히어로 섹션 배경 (1920x1080px)
- `section-bg.jpg` - 섹션 배경 (1920x600px)
- `footer-bg.jpg` - 푸터 배경 (1920x400px)

### 로고 (logos/)
- `dit-logo.svg` - 메인 로고 (벡터)
- `dit-logo-white.svg` - 흰색 로고 (벡터)
- `dit-logo.png` - PNG 로고 (200x60px)

### 아이콘 (icons/)
- `hardware-icon.svg` - 하드웨어 서비스 아이콘
- `software-icon.svg` - 소프트웨어 서비스 아이콘
- `network-icon.svg` - 네트워크 서비스 아이콘
- `support-icon.svg` - 지원 아이콘
- `security-icon.svg` - 보안 아이콘

### 서비스 이미지 (services/)
- `hardware-service.jpg` - 하드웨어 유지보수 (400x300px)
- `software-service.jpg` - 소프트웨어 유지보수 (400x300px)
- `network-service.jpg` - 네트워크 유지보수 (400x300px)

### 고객사 로고 (clients/)
- `client-1.png` ~ `client-12.png` - 고객사 로고들 (200x100px)

### 인증서 (certifications/)
- `iso-27001.png` - ISO 27001 인증서 (150x150px)
- `itil-v4.png` - ITIL v4 인증서 (150x150px)
- `pmp.png` - PMP 인증서 (150x150px)
- `cissp.png` - CISSP 인증서 (150x150px)
- `aws-partner.png` - AWS 파트너 로고 (150x150px)
- `microsoft-gold.png` - Microsoft Gold 파트너 로고 (150x150px)

## 이미지 최적화 가이드

### 파일 형식
- **로고/아이콘**: SVG (벡터) 또는 PNG (투명 배경)
- **사진**: JPG (압축률 80-90%)
- **일러스트**: PNG 또는 SVG

### 파일 크기
- 배경 이미지: 최대 500KB
- 로고/아이콘: 최대 50KB
- 서비스 이미지: 최대 200KB
- 고객사 로고: 최대 30KB

### 색상 가이드
- 메인 컬러: #FF2B4C (빨간색)
- 서브 컬러: #2CB693 (초록색)
- 다크 컬러: #232324 (검은색)
- 라이트 컬러: #F8F9FA (회색)

## 사용법

이미지를 Next.js에서 사용할 때:

```jsx
import Image from 'next/image'

// 정적 이미지
<Image 
  src="/images/logos/dit-logo.svg" 
  alt="DIT Logo" 
  width={200} 
  height={60} 
/>

// 배경 이미지 (CSS)
<div className="bg-[url('/images/backgrounds/hero-bg.jpg')] bg-cover bg-center">
  {/* 내용 */}
</div>
```

## 주의사항

1. 모든 이미지는 웹 최적화된 형태로 저장
2. 파일명은 소문자와 하이픈(-) 사용
3. 저작권이 있는 이미지는 사용 금지
4. 고해상도 디스플레이를 위해 @2x 버전도 준비 권장 