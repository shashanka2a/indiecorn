'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Tag from './Tag'

interface Project {
  title: string
  emoji: string
  status: string
  desc: string
  tags: string[]
  color: string
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-[#0f0f11] border border-white/5 rounded-2xl p-6 hover:border-[#00E599]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Dynamic Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5 text-xl">
            {project.emoji}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#00E599] transition-colors">
              {project.title}
            </h3>
            <span className={`text-[10px] font-mono flex items-center gap-1 mt-1 ${project.status === 'Live' ? 'text-green-400' : 'text-yellow-400'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`} />
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10 group-hover:text-gray-300 transition-colors">
        {project.desc}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto relative z-10 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
        <div className="flex gap-2">
          {project.tags.slice(0, 2).map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
        <div className="text-white hover:text-[#00E599] transition-colors p-2 rounded-full hover:bg-white/5">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  )
}





