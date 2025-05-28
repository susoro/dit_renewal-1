// 이미지 경로 상수들
export const IMAGES = {
  // 로고
  logos: {
    main: '/images/logos/dit-logo.svg',
    white: '/images/logos/dit-logo-white.svg',
  },
  
  // 아이콘
  icons: {
    hardware: '/images/icons/hardware-icon.svg',
    software: '/images/icons/software-icon.svg',
    network: '/images/icons/network-icon.svg',
  },
  
  // 배경 이미지
  backgrounds: {
    hero: '/images/backgrounds/hero-bg.jpg',
    section: '/images/backgrounds/section-bg.jpg',
    footer: '/images/backgrounds/footer-bg.jpg',
  },
  
  // 서비스 이미지
  services: {
    hardware: '/images/services/hardware-service.jpg',
    software: '/images/services/software-service.jpg',
    network: '/images/services/network-service.jpg',
  },
  
  // 고객사 로고
  clients: Array.from({ length: 12 }, (_, i) => `/images/clients/client-${i + 1}.png`),
  
  // 인증서
  certifications: {
    iso27001: '/images/certifications/iso-27001.png',
    itilV4: '/images/certifications/itil-v4.png',
    pmp: '/images/certifications/pmp.png',
    cissp: '/images/certifications/cissp.png',
    awsPartner: '/images/certifications/aws-partner.png',
    microsoftGold: '/images/certifications/microsoft-gold.png',
  },
} as const

// 이미지 최적화를 위한 헬퍼 함수
export const getOptimizedImageUrl = (src: string, width?: number, quality?: number) => {
  const params = new URLSearchParams()
  
  if (width) params.set('w', width.toString())
  if (quality) params.set('q', quality.toString())
  
  return params.toString() ? `${src}?${params.toString()}` : src
}

// 반응형 이미지 소스 생성
export const getResponsiveImageSources = (baseSrc: string) => {
  return {
    mobile: getOptimizedImageUrl(baseSrc, 768),
    tablet: getOptimizedImageUrl(baseSrc, 1024),
    desktop: getOptimizedImageUrl(baseSrc, 1920),
  }
}

// 이미지 프리로딩을 위한 함수
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// 중요한 이미지들을 프리로드
export const preloadCriticalImages = async () => {
  const criticalImages = [
    IMAGES.logos.main,
    IMAGES.icons.hardware,
    IMAGES.icons.software,
    IMAGES.icons.network,
  ]
  
  try {
    await Promise.all(criticalImages.map(preloadImage))
    console.log('Critical images preloaded successfully')
  } catch (error) {
    console.warn('Failed to preload some critical images:', error)
  }
} 