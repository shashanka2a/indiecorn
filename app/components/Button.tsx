'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white'
  children: React.ReactNode
  className?: string
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base"
  
  const variants = {
    primary: "bg-[#00E599] text-black hover:bg-[#00c985] hover:shadow-[0_0_20px_rgba(0,229,153,0.4)] border border-transparent",
    secondary: "bg-transparent text-white border border-white/20 hover:border-[#00E599] hover:text-[#00E599] hover:bg-[#00E599]/5",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
    white: "bg-white text-black hover:bg-gray-100 border border-transparent shadow-lg"
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}


