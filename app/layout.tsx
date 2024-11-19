import './css/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const hkgrotesk = localFont({
  src: [
    {
      path: '../public/fonts/HKGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/HKGrotesk-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/HKGrotesk-ExtraBold.woff2',
      weight: '800',
    },        
  ],
  variable: '--font-hkgrotesk',
  display: 'swap',  
})

export const metadata = {
  title: 'Kat Gov',
  description: 'The first open source governance platform for the Kaspa ecosystem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${hkgrotesk.variable} font-inter antialiased bg-slate-900 text-slate-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
