'use client'

import { useState } from 'react'
import { ArrowRight, Terminal, Cpu, Heart } from 'lucide-react'
import Button from './components/Button'
import ProjectCard from './components/ProjectCard'
import Navbar from './components/Navbar'
import FollowSection from './components/FollowSection'
import { PROJECTS, ARTICLES } from './data'

function JournalList() {
  const [showAllArticles, setShowAllArticles] = useState(false)
  const visibleArticles = showAllArticles ? ARTICLES : ARTICLES.slice(0, 3)
  const hasMore = ARTICLES.length > 3

  return (
    <div className="grid gap-8">
      {visibleArticles.map((article, index) => (
        <a 
          key={index} 
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer border border-gray-200 hover:border-[#00B97A] p-8 rounded-3xl transition-all hover:shadow-xl bg-white relative overflow-hidden block"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B97A]/5 rounded-bl-[100px] transition-transform group-hover:scale-150 duration-700" />
          
          <div className="flex flex-col md:flex-row gap-6 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {article.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-bold text-[#00B97A] bg-[#00B97A]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
                <span className="text-xs text-gray-400 font-mono">
                  {article.date} • {article.readTime} read
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#00B97A] transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {article.excerpt}
              </p>
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#00B97A] group-hover:border-[#00B97A] group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </a>
      ))}

      {hasMore && (
        <div className="flex justify-center">
          <Button variant="white" className="border-gray-200" onClick={() => setShowAllArticles(!showAllArticles)}>
            {showAllArticles ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00E599] selection:text-black font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00E599] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-lg bg-black/50 border border-white/10 text-green-400 font-mono text-sm mb-8 animate-fade-in-up hover:border-[#00E599]/30 transition-colors shadow-2xl">
            <Terminal className="w-4 h-4" />
            <span>indie_corn@startup:~$</span>
            <span className="w-2 h-4 bg-green-400 animate-pulse ml-1" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Indie <span className="text-gray-500">today.</span> <br />
            Unicorn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-emerald-500">tomorrow.</span>
          </h1>

          <p className="max-w-5xl text-lg md:text-xl text-gray-300 mb-12 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '200ms' }}>
            <span className="text-white font-medium">Tony Stark built his suit in a cave.</span> I am trying to build startups on a MacBook Pro 2022, no team, no VC, just AI and focus.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button variant="primary" className="h-14 px-10 text-lg">
              View Projects <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="secondary" className="h-14 px-10 text-lg">
              Read Manifesto
            </Button>
          </div>

        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section id="mission" className="py-32 bg-white text-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
             <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
              The <span className="text-[#00B97A]">Indie</span> Manifesto
            </h2>
            <div className="h-1 w-1/3 bg-[#00B97A] mx-auto rounded-full" />
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-12 border-l-4 border-[#00B97A] pl-6 inline-block text-left mx-auto max-w-2xl">
            "I believe in building without permission."
          </blockquote>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
            In a world of gatekeepers and venture capital, I choose the indie path. I build products that matter, solve real problems, and create value without compromise.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
               <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">The Old Playbook</h3>
               <p className="text-2xl font-bold text-gray-400 line-through">"I have VCs, MBAs, big teams."</p>
            </div>
            <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl transform md:-translate-y-4">
               <div className="absolute inset-0 bg-gradient-to-br from-[#00E599]/20 to-transparent" />
               <h3 className="text-[#00E599] font-bold uppercase tracking-widest text-sm mb-4 relative z-10">IndieCorn</h3>
               <p className="text-3xl font-bold relative z-10">"We have AI."</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 md:gap-16 text-sm font-bold tracking-widest uppercase text-gray-400">
            {['Independence', 'Innovation', 'Impact'].map(word => (
              <span key={word} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00B97A] rounded-full" /> {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT PROJECTS SECTION */}
      <section id="projects" className="py-32 relative bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
                Current <span className="text-[#00E599]">Projects</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Building <span className="text-white font-bold">25 projects</span> by end of 2025 - tools and platforms that empower the startups and businesses.
              </p>
            </div>
            <div className="flex items-center gap-4">
               <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                 <Cpu className="w-4 h-4 text-[#00E599]" />
                 <span className="text-xs font-mono text-[#00E599]">SYSTEM_ONLINE</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL SECTION */}
      <section id="journal" className="py-32 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                The <span className="text-[#00B97A]">Journal</span>
              </h2>
              <p className="text-gray-500 text-lg">Thoughts, lessons, and insights from the indie developer journey.</p>
            </div>
          </div>

          <JournalList />
        </div>
      </section>

      {/* NEWSLETTER / FOLLOW SECTION */}
      <FollowSection />

      {/* FOOTER */}
      <footer className="bg-black pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded bg-[#00E599] flex items-center justify-center text-black font-bold text-sm">I</div>
                 <span className="font-bold text-2xl tracking-tight text-white">IndieCorn<span className="text-[#00E599]">.xyz</span></span>
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Building the future, one indie project at a time.
              </p>
              <p className="text-white font-medium">🦄 Indie today. Unicorn tomorrow.</p>
            </div>

            <div>
              <h4 className="text-gray-500 font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-4">
                {['Mission', 'Projects', 'Journal', 'Follow'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-white hover:text-[#00E599] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-500 font-bold mb-6 uppercase tracking-wider text-xs">Current Status</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Building in public
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  4 active projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  Open to collaborations
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p className="font-mono">
              Indie today. Unicorn tomorrow. One man. One laptop. One billion.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by an indie maker
              </span>
              <span>© 2025 IndieCorn.xyz</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

