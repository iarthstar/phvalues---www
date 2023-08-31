import { PageContainer } from '@/ui';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PH Values',
  description: 'Paramhansa Yogananda’s teachings on the spiritual path.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* HEADER */}
        <PageContainer as="header" className="sticky top-0 z-50 h-20 flex flex-row items-center justify-between overflow-visible">
          <div className="h-12 w-12 border rounded-full overflow-hidden">
            <Image className="invert" src="/phvalues---bw.png" width="64" height="64" alt="ph values logo" />
          </div>
          <div className="h-12 w-12 border rounded-full bg-white">
            <svg className="p-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

        </PageContainer>

        {children}

        {/* FOOTER */}
        <footer className="flex flex-col">
          <div className="h-[1px] w-full bg-neutral-200 mt-24" />
          <PageContainer className="py-24 flex flex-row justify-between">
          <div className="h-12 w-12 border rounded-full overflow-hidden">
            <Image className="invert" src="/phvalues---bw.png" width="64" height="64" alt="ph values logo" />
          </div>
          <div className="flex flex-row gap-8">
          <div className="h-12 w-12 border rounded-full overflow-hidden">
          </div><div className="h-12 w-12 border rounded-full overflow-hidden">
          </div><div className="h-12 w-12 border rounded-full overflow-hidden">
          </div>
          </div>
          </PageContainer>
          <div className="h-[1px] w-full bg-neutral-200" />
          <PageContainer className="h-28 flex flex-row justify-between items-center">
            <div className="text-sm text-stone-500">© 2023 <span className="text-purple-500">Param Hans Values</span> LLC. All Rights Reserved.</div>
            <div className="text-sm text-stone-500">Designed and Developed by <Link href="https://github.com/iarthstar" className="font-medium underline underline-offset-4 hover:text-blue-500">iarthstar</Link></div>
          </PageContainer>
        </footer>
      </body>
    </html>
  )
}



