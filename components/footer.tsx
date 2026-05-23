"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import Link from "next/link"
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons"

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/uditganguly", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/uditganguly", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com/uditganguly", label: "Twitter" },
  { icon: Mail, href: "mailto:udit.ganguly@example.com", label: "Email" },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="#" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
              Udit Ganguly
            </Link>
            <p className="text-sm text-muted-foreground">Aerospace AI Researcher</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                aria-label={link.label}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              >
                <link.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Udit Ganguly. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with Next.js • Designed for the future of aerospace
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
