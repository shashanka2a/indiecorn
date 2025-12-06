'use client'

import { Globe, Twitter, Github, Linkedin, Mail } from 'lucide-react'
import Button from './Button'

export default function FollowSection() {
  const socialLinks = [
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Github, href: '#', label: 'Github' },
    { Icon: Linkedin, href: '#', label: 'Linkedin' },
    { Icon: Mail, href: '#', label: 'Mail' },
  ]

  return (
    <section id="follow" className="py-32 px-6">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E599] to-emerald-600 rounded-[2.5rem] -rotate-1 opacity-30 blur-xl" />
        
        <div className="bg-[#111] border border-white/10 rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E599] to-transparent opacity-50" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10">
              <Globe className="w-8 h-8 text-[#00E599]" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Follow the Journey</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
              Subscribe or reach out — let's build together. No spam, just indie developer insights.
            </p>

            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="enter_email_address..." 
                className="w-full h-14 pl-6 pr-4 bg-black border border-white/20 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E599] font-mono text-sm transition-all"
              />
              <Button variant="primary" className="h-14 px-8">
                Subscribe
              </Button>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-sm font-bold text-white mb-6">LET'S CONNECT</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <a 
                    key={i} 
                    href={href} 
                    className="p-3 bg-white/5 rounded-xl hover:bg-[#00E599] hover:text-black transition-all group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

