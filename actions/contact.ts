'use server'

import { notion, DATABASE_ID } from '@/lib/notion'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  content?: string
}

export async function submitContactForm(data: ContactFormData) {
  console.log('📧 Contact form submission started:', data)
  
  try {
    // Validate environment variables
    if (!process.env.NOTION_API_KEY) {
      console.error('❌ NOTION_API_KEY is not set')
      throw new Error('Notion API key is not configured')
    }
    
    if (!process.env.NOTION_DATABASE_ID) {
      console.error('❌ NOTION_DATABASE_ID is not set')
      throw new Error('Notion database ID is not configured')
    }
    
    console.log('🔑 Environment variables check passed')
    console.log('📊 Database ID:', DATABASE_ID)
    
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        '이름': {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        '이메일': {
          email: data.email,
        },
        '전화번호': {
          phone_number: data.phone,
        },
        '의뢰내용': {
          rich_text: [
            {
              text: {
                content: data.content || '',
              },
            },
          ],
        },
      },
    })

    console.log('✅ Notion page created successfully:', response.id)

    return {
      success: true,
      message: '문의가 성공적으로 접수되었습니다.',
      data: response,
    }
  } catch (error) {
    console.error('❌ Notion API error:', error)
    
    // More detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    return {
      success: false,
      message: '문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
} 