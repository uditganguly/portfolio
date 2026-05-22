"use client"

import { motion } from "framer-motion"
import { Satellite, Brain, Cpu, Rocket } from "lucide-react"

const expertiseAreas = [
  {
    icon: Satellite,
    title: "Satellite IoT",
    description: "Designing and implementing IoT solutions for satellite communication networks and LEO constellations."
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Developing AI models for autonomous spacecraft systems and satellite data processing."
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Building radiation-hardened embedded systems for space applications and CubeSat missions."
  },
  {
    icon: Rocket,
    title: "Space Systems",
    description: "Research in orbital mechanics, propulsion systems, and mission design optimization."
  },
]

const stats = [
  { value: "5+", label: "Research Papers" },
  { value: "10+", label: "Projects" },
  { value: "3+", label: "Conferences" },
  { value: "2+", label: "Years Research" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research Focus</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              As an aerospace AI researcher, I focus on bridging the gap between artificial intelligence and space technology. My research explores how machine learning can enhance satellite communication systems, optimize mission planning, and enable autonomous decision-making in space environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I've contributed to IEEE publications on satellite IoT architectures and presented findings at international conferences. My work involves developing algorithms for real-time satellite data processing and creating predictive models for orbital dynamics."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I am exploring the application of deep learning techniques to satellite imagery analysis and investigating novel approaches to inter-satellite communication protocols.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary glow-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Expertise areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
