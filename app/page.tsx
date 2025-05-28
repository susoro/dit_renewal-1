'use client'

import type { NextPage } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import {
  CheckCircle,
  Monitor,
  Database,
  Network,
  Phone,
  Download,
  Headphones as HeadphonesIcon,
  Play,
  Clock,
  Shield,
  Users,
  Award,
  TrendingUp,
  Zap,
  Building,
  FileText,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const DITMaintenancePage: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', message: string} | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailDomain: 'naver.com',
    phone1: '',
    phone2: '',
    phone3: '',
    content: ''
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('🔄 Form submission started')
    console.log('📝 Form data:', formData)
    
    if (!formData.name || !formData.email || !formData.phone1 || !formData.phone2 || !formData.phone3) {
      console.log('❌ Validation failed: missing required fields')
      setSubmitMessage({
        type: 'error',
        message: '필수 항목을 모두 입력해주세요.'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const contactData = {
        name: formData.name,
        email: `${formData.email}@${formData.emailDomain}`,
        phone: `${formData.phone1}-${formData.phone2}-${formData.phone3}`,
        content: formData.content
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      })

      const result = await response.json()
      
      if (result.success) {
        console.log('✅ Form submission successful')
        setSubmitMessage({
          type: 'success',
          message: result.message
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          emailDomain: 'naver.com',
          phone1: '',
          phone2: '',
          phone3: '',
          content: ''
        })
      } else {
        setSubmitMessage({
          type: 'error',
          message: result.message
        })
      }
    } catch (error) {
      console.error('❌ Unexpected error during form submission:', error)
      setSubmitMessage({
        type: 'error',
        message: '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      })
    } finally {
      setIsSubmitting(false)
      console.log('🏁 Form submission completed')
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <Image
                src="/DIT.svg"
                alt="DIT Logo"
                width={88}
                height={35}
                priority
              />
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#company" 
              className="nav-link transition-colors"
            >
              회사소개
            </Link>
            <Link 
              href="#services" 
              className="nav-link transition-colors"
            >
              서비스
            </Link>
            <Link 
              href="#technology" 
              className="nav-link transition-colors"
            >
              기술역량
            </Link>
            <Link 
              href="#portfolio" 
              className="nav-link transition-colors"
            >
              고객사례
            </Link>
          </nav>
          <Button className="bg-[#232324] hover:bg-[#232324]/90 text-white shadow-lg border-radius-50">
            문의하기
          </Button>
        </div>
      </header>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className={`bg-[#FF2B4C] hover:bg-[#FF2B4C]/90 text-white shadow-2xl rounded-full px-6 py-3 ${isMounted ? 'animate-pulse' : ''}`}
        >
          <HeadphonesIcon className="w-5 h-5 mr-2" />
          도움이 필요하신가요?
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/main.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="w-full h-full bg-gray-50"></div>
          </video>
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0"></div>
        </div>
        
        {/* Decorative elements (optional - can be removed if video provides enough visual interest) */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#FF2B4C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF2B4C]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 h-full">
          <div className="flex items-center justify-center min-h-[50vh] text-center">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation animation="fadeInUp">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-12 text-white leading-tight">
                  <span className="text-[#FF2B4C]">Business Value</span><br />
                  <span className="text-[#232324]">DIT가 이끌어 냅니다</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    size="lg"
                    className="bg-[#232324] hover:bg-[#232324]/90 text-white text-lg px-8 py-4 shadow-lg rounded-full"
                  >
                    솔루션 문의하기
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section id="company" className="min-h-[90vh] md:min-h-[85vh] lg:min-h-[80vh] py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-6 text-gray-900 font-weight-500">
                체계적인 정보전략 방안 및<br/>문제해결을 제공합니다
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                다양한 기술 인증과 파트너십을 바탕으로 안정적이고 전문적인 IT 유지보수 서비스를 제공합니다
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div id="technology">
              <div className="space-y-8">
                <ScrollAnimation animation="fadeInLeft" delay={200}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FF2B4C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#FF2B4C]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#232324]">기술 인증 및 자격</h3>
                      <p className="text-gray-600">
                        ISO 27001, ITIL, PMP 등 국제 표준 인증을 보유한 전문 엔지니어들이 서비스를 담당합니다
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInLeft" delay={300}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#232324]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#232324]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#232324]">전문 엔지니어팀</h3>
                      <p className="text-gray-600">
                        평균 10년 이상의 경력을 보유한 하드웨어, 소프트웨어, 네트워크 전문가들로 구성
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInLeft" delay={400}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#232324]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-[#232324]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#232324]">파트너사 네트워크</h3>
                      <p className="text-gray-600">
                        주요 IT 벤더들과의 공식 파트너십을 통해 신속하고 정확한 기술 지원을 제공합니다
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div id="portfolio" className="grid grid-cols-2 gap-4">
              <ScrollAnimation animation="fadeInRight" delay={300}>
                <Card className="p-6 text-center border-[#FF2B4C]/20 bg-white/70 backdrop-blur-sm shadow-lg">
                  <div className="text-2xl font-bold text-[#FF2B4C] mb-2">2014</div>
                  <div className="text-sm text-gray-600">설립연도</div>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeInRight" delay={400}>
                <Card className="p-6 text-center border-[#232324]/20 bg-white/70 backdrop-blur-sm shadow-lg">
                  <div className="text-2xl font-bold text-[#232324] mb-2">500+</div>
                  <div className="text-sm text-gray-600">고객사</div>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeInRight" delay={500}>
                <Card className="p-6 text-center border-[#232324]/20 bg-white/70 backdrop-blur-sm shadow-lg">
                  <div className="text-2xl font-bold text-[#232324] mb-2">15+</div>
                  <div className="text-sm text-gray-600">기술 인증</div>
                </Card>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeInRight" delay={600}>
                <Card className="p-6 text-center border-gray-200 bg-white/70 backdrop-blur-sm shadow-lg">
                  <div className="text-2xl font-bold text-gray-700 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">서비스 가용성</div>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="services" className="min-h-[90vh] md:min-h-[85vh] lg:min-h-[80vh] py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-6 text-gray-900 font-weight-500">
                <span className="text-[#FF2B4C]">통합 유지보수</span> 서비스 영역
              </h2>
              <p className="text-lg text-gray-600">하드웨어부터 소프트웨어, 네트워크까지 모든 IT 자산을 한 번에</p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hardware Maintenance */}
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#FF2B4C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#232324]">하드웨어 유지보수</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  서버, 스토리지, 네트워크 장비 등 모든 하드웨어 자산의 예방 정비부터 장애 대응까지 완벽 지원
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>정기 점검 및 예방 정비</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>24시간 장애 대응</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>부품 교체 및 업그레이드</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>성능 모니터링 및 최적화</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-500">유지보수 </div>
                  <div className="text-2xl font-bold text-[#FF2B4C]">8~15%</div>
                </div>
              </Card>
            </ScrollAnimation>

            {/* Software Maintenance */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#2CB693] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#232324]">소프트웨어 유지보수</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  운영체제, 데이터베이스, 애플리케이션 등 모든 소프트웨어의 안정적인 운영과 지속적인 개선 지원
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>패치 및 업데이트 관리</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>버그 수정 및 기능 개선</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>보안 취약점 대응</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>성능 튜닝 및 최적화</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-500">유지보수 </div>
                  <div className="text-2xl font-bold text-[#232324]">10~15%</div>
                </div>
              </Card>
            </ScrollAnimation>

            {/* Network Maintenance */}
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#232324] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#232324]">네트워크 유지보수</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  네트워크 인프라의 안정적인 운영과 보안 강화를 통해 비즈니스 연속성을 보장합니다
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>네트워크 모니터링</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>보안 정책 관리</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>트래픽 분석 및 최적화</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#2CB693] mr-3" />
                    <span>장애 진단 및 복구</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-500">유지보수 </div>
                  <div className="text-2xl font-bold text-[#232324]">맞춤 견적</div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Client Companies */}
      <section className="min-h-[50vh] md:min-h-[45vh] lg:min-h-[40vh] py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-6 text-gray-900 font-weight-500">
                <span className="text-[#FF2B4C]">이 기업들도</span> 선택했습니다
              </h2>
              <p className="text-lg text-gray-600">다양한 업종의 500+ 기업이 DIT의 전문성을 신뢰하고 있습니다</p>
            </div>
          </ScrollAnimation>

          {/* Animated Logo Slider */}
          <div className="relative overflow-hidden">
            <div className={`flex ${isMounted ? 'animate-scroll' : ''}`}>
              {/* First set of logos */}
              <div className="flex min-w-full justify-around items-center gap-8">
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">삼성전자</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">LG전자</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">현대자동차</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">SK텔레콤</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">KT</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">포스코</span>
                </div>
              </div>
              
              {/* Second set of logos (duplicate for seamless loop) */}
              <div className="flex min-w-full justify-around items-center gap-8">
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">한국전력</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">신한은행</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">KB국민은행</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">우리은행</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">롯데그룹</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">CJ그룹</span>
                </div>
              </div>
              
              {/* Third set of logos (duplicate for seamless loop) */}
              <div className="flex min-w-full justify-around items-center gap-8">
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">삼성전자</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">LG전자</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">현대자동차</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">SK텔레콤</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">KT</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-20 min-w-[160px] hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-semibold">포스코</span>
                </div>
              </div>
            </div>
          </div>

          <ScrollAnimation animation="fadeInUp" delay={700}>
            <div className="text-center mt-12">
              <p className="text-gray-600">
                <span className="font-semibold text-[#FF2B4C]">500+</span> 기업이 선택한 신뢰할 수 있는 IT 파트너
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Technology & Differentiation */}
      <section className="min-h-[90vh] md:min-h-[85vh] lg:min-h-[80vh] py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 h-full">
          <div className="flex flex-col justify-center min-h-[70vh]">
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl mb-6 text-gray-900 font-weight-500">
                  <span className="text-[#FF2B4C]">기술 역량</span> 및 차별성
                </h2>
                <p className="text-lg text-gray-600">검증된 기술력과 차별화된 서비스로 고객의 성공을 이끕니다</p>
              </div>
            </ScrollAnimation>

            <div className="grid lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="fadeInUp" delay={100}>
                <Card className="p-8 bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FF2B4C]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-[#FF2B4C]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#232324]">보안 전문성</h3>
                  <p className="text-gray-600 mb-4">
                    ISO 27001 인증 기반의 체계적인 보안 관리와 24시간 보안 모니터링 서비스
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2CB693] mr-2" />
                      보안 취약점 진단 및 대응
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2CB693] mr-2" />
                      침입 탐지 및 차단 시스템
                    </li>
                  </ul>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={200}>
                <Card className="p-8 bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#2CB693]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-[#2CB693]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#232324]">신속한 대응</h3>
                  <p className="text-gray-600 mb-4">
                    평균 15분 이내 1차 대응, 4시간 이내 현장 출동으로 비즈니스 중단 최소화
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2CB693] mr-2" />
                      24/7 원격 모니터링
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2CB693] mr-2" />
                      긴급 상황 즉시 대응
                    </li>
                  </ul>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={300}>
                <Card className="p-8 bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#232324]/10 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-[#232324]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#232324]">비용 최적화</h3>
                  <p className="text-gray-600 mb-4">
                    예방 정비를 통한 장애 사전 차단으로 총 운영비용(TCO) 30% 절감 효과
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2CB693] mr-2" />
                      예측 기반 유지보수
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2CB693] mr-2" />
                      투명한 비용 구조
                    </li>
                  </ul>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Contact */}
      <section id="contact" className="min-h-[90vh] md:min-h-[85vh] lg:min-h-[80vh] py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-6 text-gray-900 font-weight-500">
                고객 맞춤 <span className="text-[#FF2B4C]">견적 문의</span>
              </h2>
              <p className="text-lg text-gray-600">상담/문의는 무료이며, 계약 전 기본 진단을 제공합니다</p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <Card className="p-8 bg-white border border-gray-200 shadow-lg rounded-2xl">
                <CardHeader className="px-0 pt-0 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-black-500 text-sm font-medium">빠른 응답</span>
                    </div>
                    <span className="text-xs text-gray-500">* 필수입력사항</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">상담 문의하기</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">
                        이름 <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        placeholder="이름을 입력하세요" 
                        className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 bg-gray-50" 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">
                        이메일 <span className="text-red-500">*</span>
                      </label>
                      <div id="confrimEmail" className="flex items-center gap-2">
                        <div className="flex-1">
                          <Input 
                            placeholder="이메일을 입력하세요" 
                            className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 bg-gray-50" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <span id="middle" className="text-gray-500 font-medium">
                          <small>@</small>
                        </span>
                        <div className="flex-1">
                          <select 
                            id="email_address" 
                            name="email_address" 
                            title="이메일 선택" 
                            className="w-full h-12 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg bg-gray-50 px-3 text-sm text-gray-700"
                            value={formData.emailDomain}
                            onChange={(e) => handleInputChange('emailDomain', e.target.value)}
                          >
                            <option value="naver.com">naver.com</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="hanmail.net">hanmail.net</option>
                            <option value="nate.com">nate.com</option>
                            <option value="direct">직접입력</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">
                        전화번호 <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Input 
                            type="number"
                            placeholder="010"
                            maxLength={3}
                            className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 bg-gray-50 text-center no-spinner" 
                            value={formData.phone1}
                            onChange={(e) => handleInputChange('phone1', e.target.value)}
                            required
                          />
                        </div>
                        <span className="text-gray-500 font-medium">-</span>
                        <div className="flex-1">
                          <Input 
                            type="number"
                            placeholder="0000"
                            maxLength={4}
                            className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 bg-gray-50 text-center no-spinner" 
                            value={formData.phone2}
                            onChange={(e) => handleInputChange('phone2', e.target.value)}
                            required
                          />
                        </div>
                        <span className="text-gray-500 font-medium">-</span>
                        <div className="flex-1">
                          <Input 
                            type="number"
                            placeholder="0000"
                            maxLength={4}
                            className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg h-12 bg-gray-50 text-center no-spinner" 
                            value={formData.phone3}
                            onChange={(e) => handleInputChange('phone3', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">의뢰내용</label>
                      <Textarea
                        placeholder="의뢰내용에 대해 설명해주세요"
                        rows={6}
                        className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg bg-gray-50 resize-none"
                        value={formData.content}
                        onChange={(e) => handleInputChange('content', e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-[#232324] hover:bg-[#232324]/90 text-white h-12 rounded-full font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '전송중...' : '문의하기'}
                    </Button>
                  </form>
                  
                  {submitMessage && (
                    <div className={`mt-4 p-3 rounded-lg text-center ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                      {submitMessage.message}
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            {/* Contact Info */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="text-center p-6 bg-gray-50 rounded-[4px] hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-[#232324]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#232324]/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#232324] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#232324] transition-colors duration-300">전화 문의</h3>
                  <p className="text-gray-600 text-base font-medium group-hover:text-[#232324] transition-colors duration-300">1000-8373</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-[4px] hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-[#232324]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#232324]/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#232324] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#232324] transition-colors duration-300">이메일 문의</h3>
                  <p className="text-gray-600 text-base font-medium group-hover:text-[#232324] transition-colors duration-300">dit@dit.co</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[70vh] md:min-h-[65vh] lg:min-h-[60vh] py-12 md:py-16 lg:py-20 bg-white text-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 h-full">
          <div className="flex items-center justify-center min-h-[50vh] text-center">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation animation="fadeInUp">
                <h2 className="text-4xl mb-8 text-gray-900 font-weight-500">
                  지금 바로 DIT와 함께
                  <br />
                  안정적인 IT 운영을 시작하세요
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#FF2B4C] text-white hover:bg-[#FF2B4C]/90 text-lg px-8 py-4 shadow-lg border-radius-50">
                    <Phone className="w-5 h-5 mr-2" />
                    무료 상담 신청
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#232324] text-[#232324] hover:bg-[#232324] hover:text-white text-lg px-8 py-4 border-radius-50"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    회사 브로슈어 다운로드
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#232324] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div>
                    <Image
                      src="/DIT.svg"
                      alt="DIT Logo"
                      width={88}
                      height={35}
                      className="invert"
                    />
                    <ul className="space-y-2 text-sm text-gray-400 mt-4">
                      <li>1833-8373</li>
                      <li>dit@dit.co</li>
                      <li>서울시 강남구 테헤란로 123</li>
                      <li>www.dittest.com</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">서비스</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>하드웨어 유지보수</li>
                  <li>소프트웨어 유지보수</li>
                  <li>네트워크 유지보수</li>
                  <li>통합 관리 서비스</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">지원</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>24/7 기술 지원</li>
                  <li>온라인 상담</li>
                  <li>기술 문서</li>
                  <li>교육 프로그램</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">&copy; 2025 DITh2. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  개인정보처리방침
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  이용약관
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  사업자정보
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DITMaintenancePage


