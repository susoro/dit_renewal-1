import { Client } from '@notionhq/client'

// Debug environment variables
console.log('🔧 Environment variables check:')
console.log('NOTION_API_KEY exists:', !!process.env.NOTION_API_KEY)
console.log('NOTION_DATABASE_ID exists:', !!process.env.NOTION_DATABASE_ID)

if (process.env.NOTION_API_KEY) {
  console.log('NOTION_API_KEY preview:', process.env.NOTION_API_KEY.substring(0, 20) + '...')
}

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export const DATABASE_ID = process.env.NOTION_DATABASE_ID! 