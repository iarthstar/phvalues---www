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
          <Link href="/" className="h-12 w-12 border rounded-full drop-shadow-2xl">
            <Image className="invert rounded-full" src="/phvalues---bw.png" width="64" height="64" alt="ph values logo" />
          </Link>
          <div className="h-12 w-12 flex justify-center items-center border rounded-full bg-white drop-shadow-2xl">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

        </PageContainer>

        {children}

        {/* FOOTER */}
        <footer className="flex flex-col">
          <div className="h-[1px] w-full bg-neutral-200 mt-24" />
          <PageContainer className="py-24 flex flex-row justify-between">
            <Link href="/" className="h-12 w-12 transition-all shadow-sm hover:shadow-xl border rounded-full overflow-hidden">
              <Image className="invert" src="/phvalues---bw.png" width="64" height="64" alt="ph values logo" />
            </Link>
            <div className="flex flex-row gap-8">
              <Link href="http://www.twitter.com/phvalues" target="_blank" className="h-12 w-12 transition-all shadow-sm hover:shadow-xl border rounded-full overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
              </Link>
              <Link href="https://www.linkedin.com/company/param-hansa-values-llc" target="_blank" className="h-12 w-12 transition-all shadow-sm hover:shadow-xl border rounded-full overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-black" width="65.326" height="65.326" viewBox="0 0 65.326 65.326">
                  <path id="Path_2520" data-name="Path 2520" d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67" transform="translate(-903.776 -57.355)" fill="currentColor" />
                </svg>
              </Link>
              <Link href="http://www.instagram.com/officialphvalues" target="_blank" className="h-12 w-12 transition-all shadow-sm hover:shadow-xl border rounded-full overflow-hidden flex items-center justify-center">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)" /></svg>
              </Link>
            </div>
          </PageContainer>
          <div className="h-[1px] w-full bg-neutral-200" />
          <PageContainer className="h-28 flex flex-col md:flex-row justify-center gap-4 md:justify-between items-start md:items-center">
            <div className="text-xs md:text-sm text-stone-500">© 2023 <span className="text-purple-500">Param Hans Values</span> LLC. All Rights Reserved.</div>
            <div className="text-xs md:text-sm text-stone-500">Designed and Developed by <Link href="https://github.com/iarthstar" className="font-medium underline underline-offset-4 hover:text-purple-500">iarthstar</Link></div>
          </PageContainer>
        </footer>
      </body>
    </html>
  )
}



