interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5 ${className}`}>
      {children}
    </span>
  )
}





