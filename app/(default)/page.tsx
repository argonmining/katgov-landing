export const metadata = {
  title: 'Kat Gov',
  description: 'The first open source governance platform for the Kaspa ecosystem',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Pricing from '@/components/pricing'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <Pricing />
      <Faqs />
      <Cta />
    </>
  )
}
