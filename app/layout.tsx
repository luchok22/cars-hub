import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer/Footer'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Best cars for rent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
