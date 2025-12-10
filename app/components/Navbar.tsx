'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#00E599] to-emerald-600 flex items-center justify-center text-black font-bold text-lg group-hover:rotate-12 transition-transform duration-300">
              I
            </div>
            <span className="font-bold text-xl tracking-tight">Indie<span className="text-[#00E599]">Corn</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-sm shadow-2xl">
            {['Mission', 'Projects', 'Journal', 'Follow'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#00E599] transition-all group-hover:w-full group-hover:left-0 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Contact & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:flex text-sm font-medium hover:text-[#00E599] transition-colors">
              Contact
            </a>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden">
          {['Mission', 'Projects', 'Journal', 'Follow', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)} 
              className="text-2xl font-bold hover:text-[#00E599]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  )
}



