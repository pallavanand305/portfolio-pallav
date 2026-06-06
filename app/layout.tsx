import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pallav Anand - AI Engineer | LLMs, GenAI, RAG, MLOps',
  description: 'AI Engineer with 4+ years of experience building production ML systems. Specializes in LLMs, GenAI, RAG, MLOps, and cloud infrastructure. Ex-Amazon ML Engineer.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLMs', 'GenAI', 'RAG', 'MLOps', 'AWS', 'Kubernetes', 'Python', 'FastAPI'],
  authors: [{ name: 'Pallav Anand' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
  openGraph: {
    title: 'Pallav Anand - AI Engineer',
    description: 'AI Engineer with 4+ years of experience in LLMs, GenAI, RAG, and MLOps',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
