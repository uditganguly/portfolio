"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/uditganguly", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/uditganguly", label: "LinkedIn" },
  { icon: Mail, href: "mailto:udit.ganguly@example.com", label: "Email" },
  { icon: FileText, href: "#publications", label: "Publications" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      
      {/* Animated orbital elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/60 animate-orbit" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary/40 animate-orbit" style={{ animationDelay: "-5s", animationDuration: "25s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-primary/30 animate-orbit" style={{ animationDelay: "-10s", animationDuration: "30s" }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-sm tracking-wider uppercase"
              >
                Aerospace AI Researcher
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Udit Ganguly
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-xl"
            >
              {"I'm a researcher passionate about advancing aerospace technology through artificial intelligence. My work lies at the intersection of "}
              <span className="text-primary font-medium">satellite IoT systems</span>
              {", "}
              <span className="text-primary font-medium">machine learning</span>
              {", and "}
              <span className="text-primary font-medium">space technology</span>
              {"."}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed max-w-xl"
            >
              IEEE published researcher and international conference speaker, developing next-generation solutions for satellite communication and autonomous space systems.
            </motion.p>
            
            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </motion.div>
            
            {/* Navigation hints */}
            <motion.nav 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm"
            >
              <span className="text-muted-foreground/60">—</span>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              <Link href="#publications" className="text-muted-foreground hover:text-primary transition-colors">Publications</Link>
              <Link href="#speaking" className="text-muted-foreground hover:text-primary transition-colors">Speaking</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </motion.nav>
          </motion.div>
          
          {/* Right column - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border glow-cyan">
                <Image
                  src="/images/Photo Of Udit Ganguly.jpg"
                  alt="Udit Ganguly - Aerospace AI Researcher"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono tracking-wider">SCROLL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
