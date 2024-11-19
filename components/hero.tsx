import Image from 'next/image'
import Link from 'next/link'

import HeroImage from '@/public/images/hero-image.png'

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
              Turnkey Governance for Kaspa Projects
            </h1>
            <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
              Empower voices in your community with Kat Gov, the open-source platform designed for seamless, transparent, and community-driven decision-making.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="/signup">
                  Get Started Free{' '}
                </Link>
              </div>
              <div>
                <a className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm" href="https://github.com/argonmining/kat-gov">
                  Open Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
            <Image className="mx-auto" src={HeroImage} width={920} height={518} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  )
}