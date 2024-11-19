export const metadata = {
  title: 'Sign Up - Kat Gov',
  description: 'Test out Kat Gov for your community',
}

import Image from 'next/image'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import { useState, ChangeEvent, FormEvent } from 'react'

export default function SignUp() {
  const [formData, setFormData] = useState({
    projectName: '',
    projectTicker: '',
    projectWebsite: '',
    yourName: '',
    referrer: '',
    contactMethod: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Send form data to Zapier webhook
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/3848885/2rz601z/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Handle successful submission
        alert('Form submitted successfully!')
      } else {
        // Handle errors
        alert('Failed to submit form.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="lg:flex lg:space-x-20">
          {/* Left side */}
          <div className="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
            {/* Avatars */}
            <div className="flex -space-x-3 -ml-0.5 mb-6">
              <Image
                className="rounded-full border-2 border-slate-900 box-content"
                src={Avatar01}
                width={40}
                height={40}
                alt="Avatar 01"
              />
              <Image
                className="rounded-full border-2 border-slate-900 box-content"
                src={Avatar02}
                width={40}
                height={40}
                alt="Avatar 02"
              />
              <Image
                className="rounded-full border-2 border-slate-900 box-content"
                src={Avatar03}
                width={40}
                height={40}
                alt="Avatar 03"
              />
              <Image
                className="rounded-full border-2 border-slate-900 box-content"
                src={Avatar04}
                width={40}
                height={40}
                alt="Avatar 04"
              />
            </div>
            {/* Headline */}
            <h1 className="h2 font-hkgrotesk mb-8 text-center lg:text-left">Test out Kat Gov for your community</h1>
            {/* List */}
            <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited access to all features for 30 days for free.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Structure a governance model that works for your project.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Custom branding so you can use Kat Gov as your own.</span>
              </li>
            </ul>
          </div>
          {/* Right side */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Bg gradient */}
            <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-800 -z-10" aria-hidden="true" />
            <div className="p-6 md:p-8">
              <div className="font-hkgrotesk text-xl font-bold mb-6">Let's chat</div>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="projectName">
                        Project Name <span className="text-rose-500">*</span>
                      </label>
                      <input id="projectName" className="form-input text-sm py-2 w-full" type="text" value={formData.projectName} onChange={handleChange} required />
                    </div>
                    <div className="sm:w-1/2">
                      <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="projectTicker">
                        Project Ticker <span className="text-rose-500">*</span>
                      </label>
                      <input id="projectTicker" className="form-input text-sm py-2 w-full" type="text" value={formData.projectTicker} onChange={handleChange} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="projectWebsite">
                      Project Website <span className="text-rose-500">*</span>
                    </label>
                    <input id="projectWebsite" className="form-input text-sm py-2 w-full" type="url" value={formData.projectWebsite} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="yourName">
                      Your Name/Handle <span className="text-rose-500">*</span>
                    </label>
                    <input id="yourName" className="form-input text-sm py-2 w-full" type="text" value={formData.yourName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="referrer">
                      How did you hear about us? <span className="text-rose-500">*</span>
                    </label>
                    <select id="referrer" className="form-select py-2 w-full" value={formData.referrer} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option>X / Twitter</option>
                      <option>Google</option>
                      <option>Github</option>
                      <option>Nacho Project</option>
                      <option>Recommendation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="contactMethod">
                      How can we get in touch with you? <span className="text-rose-500">*</span>
                    </label>
                    <textarea id="contactMethod" className="form-textarea text-sm py-2 w-full" rows={4} value={formData.contactMethod} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                    Request Demo{' '}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
