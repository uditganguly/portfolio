"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "SatelliteML",
    description: "Machine learning framework for real-time satellite imagery classification and anomaly detection using convolutional neural networks.",
    tags: ["Python", "TensorFlow", "OpenCV", "AWS"],
    github: "https://github.com/uditganguly/satelliteml",
    demo: null,
    stars: 128,
    forks: 34,
    featured: true,
  },
  {
    title: "IoT-LEO-Protocol",
    description: "Implementation of a novel communication protocol for IoT devices in Low Earth Orbit satellite constellations.",
    tags: ["C++", "Embedded", "LoRa", "MQTT"],
    github: "https://github.com/uditganguly/iot-leo-protocol",
    demo: null,
    stars: 89,
    forks: 21,
    featured: true,
  },
  {
    title: "OrbitPredictor",
    description: "High-precision orbital mechanics simulator with AI-powered trajectory optimization for satellite mission planning.",
    tags: ["Python", "NumPy", "SciPy", "Plotly"],
    github: "https://github.com/uditganguly/orbit-predictor",
    demo: "https://orbit-demo.vercel.app",
    stars: 156,
    forks: 42,
    featured: true,
  },
  {
    title: "CubeSat-Telemetry",
    description: "Open-source telemetry system for CubeSat missions with real-time monitoring dashboard and data visualization.",
    tags: ["React", "Node.js", "WebSocket", "D3.js"],
    github: "https://github.com/uditganguly/cubesat-telemetry",
    demo: null,
    stars: 67,
    forks: 18,
    featured: false,
  },
  {
    title: "SpaceWeather-API",
    description: "RESTful API aggregating space weather data from multiple sources with prediction models for satellite operations.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/uditganguly/spaceweather-api",
    demo: "https://spaceweather.api.dev",
    stars: 94,
    forks: 27,
    featured: false,
  },
  {
    title: "GNSS-Positioning",
    description: "Enhanced GNSS positioning algorithm using machine learning for improved accuracy in challenging environments.",
    tags: ["Python", "PyTorch", "GPS", "Kalman Filter"],
    github: "https://github.com/uditganguly/gnss-ml",
    demo: null,
    stars: 73,
    forks: 19,
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">GitHub Repositories</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Open-source projects and research implementations in aerospace systems, satellite IoT, and AI applications.
          </p>
        </motion.div>
        
        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Featured badge */}
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">Featured</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Stats and links */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {project.forks}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link 
                      href={project.github} 
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </Link>
                    {project.demo && (
                      <Link 
                        href={project.demo} 
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {project.forks}
                    </span>
                  </div>
                  <Link 
                    href={project.github} 
                    className="text-xs text-primary hover:underline"
                  >
                    View Code →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="https://github.com/uditganguly"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
