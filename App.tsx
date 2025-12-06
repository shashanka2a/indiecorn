import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ExternalLink, 
  Mail, 
  Twitter,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Globe,
  Heart
} from 'lucide-react';

/* --------------------------------------------------------------------------------
 * DATA MOCKS
 * ------------------------------------------------------------------------------*/

const PROJECTS = [
  {
    title: "Kampus.fun",
    emoji: "🏫",
    status: "Live",
    desc: "Ultimate campus life platform. Connect, buy, sell, ride, and discover everything campus has to offer.",
    tags: ["Campus", "Social", "Marketplace"],
    color: "from-blue-500/20 to-indigo-500/20",
    link: "https://www.kampus.fun/"
  },
  {
    title: "Markit.one",
    emoji: "⚡",
    status: "Coming Soon",
    desc: "Simplify forms, QR codes, and hiring. Essential startup tools to launch faster and scale smarter.",
    tags: ["SaaS", "Startup", "Tools"],
    color: "from-yellow-500/20 to-orange-500/20",
    link: "https://www.markit.one/"
  },
  {
    title: "Hackr.plus",
    emoji: "🏆",
    status: "Coming Soon",
    desc: "Host smarter, judge faster, hire better. Complete hackathon platform with AI-powered management.",
    tags: ["Events", "AI", "Talent"],
    color: "from-purple-500/20 to-pink-500/20",
    link: "https://www.hackr.plus/"
  },
  {
    title: "Payd.plus",
    emoji: "💳",
    status: "Coming Soon",
    desc: "Your payments, simplified. Business invoices, creator tips, global transfers — all unified.",
    tags: ["Fintech", "Payments", "Crypto"],
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://www.payd.plus/"
  },
  {
    title: "Layr.plus",
    emoji: "🤖",
    status: "Coming Soon",
    desc: "All the layers you need to build. Create, design, and deploy from concept to completion.",
    tags: ["Dev Tools", "Design", "SaaS"],
    color: "from-cyan-500/20 to-blue-500/20",
    link: "https://www.layr.plus/"
  },
  {
    title: "MenuOS",
    emoji: "🍽️",
    status: "Live",
    desc: "Digital menu platform for restaurants. Scan, order, serve — no tablets, no delays.",
    tags: ["Restaurant", "SaaS", "QR"],
    color: "from-red-500/20 to-rose-500/20",
    link: "https://www.menuos.app/"
  },
  {
    title: "OpenGig",
    emoji: "⚡",
    status: "Live",
    desc: "Turn client inquiries into ready-to-build briefs. Automate onboarding, save time.",
    tags: ["AI", "Freelancer", "Auto"],
    color: "from-violet-500/20 to-purple-500/20",
    link: "https://opengig.net/"
  },
  {
    title: "StayLinq",
    emoji: "🏨",
    status: "Live",
    desc: "End-to-end operating system for vacation rental managers. Operational automation.",
    tags: ["Hospitality", "Property", "SaaS"],
    color: "from-sky-500/20 to-blue-500/20",
    link: "https://www.staylinq.co/"
  },
  {
    title: "ProductJoy",
    emoji: "🚀",
    status: "Live",
    desc: "Premium web & mobile app development. From wireframes to launch, at the speed of ambition.",
    tags: ["Dev Agency", "Web", "Mobile"],
    color: "from-orange-500/20 to-amber-500/20",
    link: "https://www.productjoy.co/"
  },
  {
    title: "Momint",
    emoji: "💎",
    status: "Live",
    desc: "Own moments from your favorite influencers. Exclusive NFTs with meet-and-greets.",
    tags: ["Web3", "NFT", "Creator"],
    color: "from-indigo-500/20 to-violet-500/20",
    link: "https://www.momint.club/"
  },
  {
    title: "WhatIfStudio",
    emoji: "🎬",
    status: "Live",
    desc: "Rewriting sad endings beautifully. Exploring alternate timelines through AI filmmaking.",
    tags: ["AI Film", "Creative", "Story"],
    color: "from-fuchsia-500/20 to-pink-500/20",
    link: "https://www.whatifstudio.art/"
  },
  {
    title: "Aura Art",
    emoji: "🎨",
    status: "Live",
    desc: "AI meets creativity. Ultimate creative platform with templates, editing tools, and AI.",
    tags: ["AI", "Creative", "Content"],
    color: "from-rose-500/20 to-pink-500/20",
    link: "https://www.tryaura.art/"
  },
  {
    title: "ShaadiVerse",
    emoji: "📸",
    status: "Live",
    desc: "Capture life's best moments. Find the perfect photographer for your special moments.",
    tags: ["Marketplace", "Photo", "Booking"],
    color: "from-pink-500/20 to-red-500/20",
    link: "https://shaadiverse.app/"
  },
  {
    title: "OmniTrix",
    emoji: "🔗",
    status: "Live",
    desc: "Where IoT meets intelligence to make supply chains with AI agents and blockchain.",
    tags: ["IoT", "Blockchain", "AI"],
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://www.tryomnitrix.com/"
  },
  {
    title: "BlueBeetle",
    emoji: "🤖",
    status: "Live",
    desc: "Agentic intelligence for markets that never sleep. The living co-pilot for traders.",
    tags: ["AI", "Trading", "Finance"],
    color: "from-slate-500/20 to-gray-500/20",
    link: "https://www.bluebeetle.online/"
  }
];

const ARTICLES = [
  {
    title: "What is Indiecorn?",
    excerpt: "Discover Indiecorn - the startup studio empowering indie founders to build the next generation of unicorns with AI-powered tools and community support.",
    tags: ["Indiecorn", "Startup Studio"],
    date: "Oct 1, 2025",
    readTime: "5 min",
    link: "https://medium.com/@jagannathamshashank/what-is-indiecorn-building-the-next-generation-of-indie-unicorns-4b559f5e33cf"
  },
  {
    title: "Indiecorn vs Indicorn: Key Differences",
    excerpt: "Understanding the distinction between Indiecorn (our startup studio) and Indicorn (different entity). Learn why the spelling matters for our brand identity.",
    tags: ["Brand Identity", "Clarification"],
    date: "Oct 15, 2025",
    readTime: "4 min",
    link: "https://medium.com/@jagannathamshashank/indiecorn-vs-indicorn-why-spelling-matters-for-our-identity-2926632b50a1"
  },
  {
    title: "The Monopoly Exploitation Cycle",
    excerpt: "How once-innovative companies turn against their users. An analysis of the lifecycle of platform power and the need for decentralized alternatives.",
    tags: ["Tech", "Strategy", "Analysis"],
    date: "Nov 2, 2025",
    readTime: "6 min",
    link: "https://medium.com/@jagannathamshashank/the-monopoly-exploitation-cycle-how-once-innovative-companies-turn-against-their-users-4550b07ebe5c"
  },
  {
    title: "Why Student Commerce Remains Unsolved",
    excerpt: "The campus marketplace is fragmented and inefficient. Exploring the unique challenges and opportunities in building for the student economy.",
    tags: ["Marketplace", "Campus", "Startups"],
    date: "Nov 18, 2025",
    readTime: "5 min",
    link: "https://medium.com/@jagannathamshashank/why-the-student-commerce-problem-remains-unsolved-eba65c0bab78"
  },
  {
    title: "Why Campus Ride-Sharing is Broken",
    excerpt: "Students need reliable, affordable transport. Why current solutions fail specifically in campus environments and how we can fix it.",
    tags: ["Mobility", "Campus", "Problem Solving"],
    date: "Dec 5, 2025",
    readTime: "4 min",
    link: "https://medium.com/@jagannathamshashank/why-campus-ride-sharing-remains-broken-5f056ee084a6"
  },
  {
    title: "From Assignments to Vibe Coding",
    excerpt: "How AI has evolved and redefined industries. Moving beyond basic automation to creative collaboration and 'vibe coding' with LLMs.",
    tags: ["AI", "Future of Work", "Coding"],
    date: "Dec 12, 2025",
    readTime: "7 min",
    link: "https://medium.com/@jagannathamshashank/from-assignments-to-vibe-coding-how-ai-evolved-and-redefined-industries-7547a0e765c4"
  }
];

/* --------------------------------------------------------------------------------
 * COMPONENTS
 * ------------------------------------------------------------------------------*/

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-[#00E599] text-black hover:bg-[#00c985] hover:shadow-[0_0_20px_rgba(0,229,153,0.4)] border border-transparent",
    secondary: "bg-transparent text-white border border-white/20 hover:border-[#00E599] hover:text-[#00E599] hover:bg-[#00E599]/5",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
    white: "bg-white text-black hover:bg-gray-100 border border-transparent shadow-lg"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Tag = ({ children, className = "" }) => (
  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5 ${className}`}>
    {children}
  </span>
);

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

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
  );
};

/* --------------------------------------------------------------------------------
 * MAIN APP COMPONENT
 * ------------------------------------------------------------------------------*/

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00E599] selection:text-black font-sans">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#00E599] to-emerald-600 flex items-center justify-center text-black font-bold text-lg group-hover:rotate-12 transition-transform duration-300">
              I
            </div>
            <span className="font-bold text-xl tracking-tight">Indie<span className="text-[#00E599]">Corn</span></span>
          </div>

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

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00E599] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-lg bg-black/50 border border-white/10 text-green-400 font-mono text-sm mb-10 animate-fade-in-up hover:border-[#00E599]/30 transition-colors shadow-2xl">
            <Terminal className="w-4 h-4" />
            <span>indie_corn@startup:~$</span>
            <span className="w-2 h-4 bg-green-400 animate-pulse ml-1" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Indie <span className="text-gray-500">today.</span> <br />
            Unicorn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-emerald-500">tomorrow.</span>
          </h1>

          <p className="max-w-3xl text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '200ms' }}>
            <span className="text-white font-medium">Tony Stark built his suit in a cave.</span> <br/>
            I am trying to build startups on a MacBook Pro 2022 — no team, no VC, just AI and focus.
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
            <Button variant="white" className="mt-6 md:mt-0 border-gray-200">
              View All Posts
            </Button>
          </div>

          <div className="grid gap-8">
            {ARTICLES.map((article, index) => (
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
          </div>
        </div>
      </section>

      {/* NEWSLETTER / FOLLOW SECTION */}
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
                   {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                     <a key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-[#00E599] hover:text-black transition-all group">
                       <Icon className="w-5 h-5" />
                     </a>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  15 active projects
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

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; 
        }
      `}</style>
    </div>
  );
};

export default App;
