'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn'
  delay?: number
  threshold?: number
}

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation(threshold)

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClass} opacity-0 translate-y-8`
        case 'fadeInLeft':
          return `${baseClass} opacity-0 -translate-x-8`
        case 'fadeInRight':
          return `${baseClass} opacity-0 translate-x-8`
        case 'fadeIn':
          return `${baseClass} opacity-0`
        case 'scaleIn':
          return `${baseClass} opacity-0 scale-95`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  )
} 