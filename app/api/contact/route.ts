import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 기본 유효성 검사
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, message: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      )
    }

    // 여기서 실제로는 이메일 전송이나 데이터베이스 저장 등을 처리
    console.log('Contact form submission:', body)
    
    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 