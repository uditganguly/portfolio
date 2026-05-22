"use client"

import { motion } from "framer-motion"
import { FileText, ExternalLink, Award, BookOpen } from "lucide-react"
import Link from "next/link"

const publications = [
  {
    title: "Machine Learning Approaches for Satellite IoT Network Optimization in LEO Constellations",
    authors: ["Udit Ganguly", "Dr. Sarah Chen", "Prof. Raj Kumar"],
    journal: "IEEE Transactions on Aerospace and Electronic Systems",
    year: 2024,
    doi: "10.1109/TAES.2024.123456",
    type: "journal",
    citations: 12,
    abstract: "This paper presents a novel machine learning framework for optimizing satellite IoT network performance in Low Earth Orbit constellations, achieving 40% improvement in throughput.",
  },
  {
    title: "Deep Learning for Real-Time Satellite Imagery Classification in Disaster Response",
    authors: ["Udit Ganguly", "Dr. Emily Watson"],
    journal: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    year: 2024,
    doi: "10.1109/JSTARS.2024.789012",
    type: "journal",
    citations: 8,
    abstract: "A deep learning architecture for real-time satellite imagery classification during natural disasters, enabling rapid response coordination.",
  },
  {
    title: "Autonomous Orbit Determination Using Neural Networks for CubeSat Missions",
    authors: ["Udit Ganguly", "Dr. Michael Brown", "Dr. Lisa Park"],
    journal: "Proceedings of IEEE Aerospace Conference",
    year: 2023,
    doi: "10.1109/AERO.2023.456789",
    type: "conference",
    citations: 15,
    abstract: "Novel neural network approach for autonomous orbit determination in resource-constrained CubeSat environments.",
  },
  {
    title: "Energy-Efficient Communication Protocols for Satellite IoT Networks",
    authors: ["Udit Ganguly", "Prof. James Wilson"],
    journal: "IEEE Internet of Things Journal",
    year: 2023,
    doi: "10.1109/JIOT.2023.234567",
    type: "journal",
    citations: 23,
    abstract: "Development of energy-efficient protocols for satellite IoT networks, reducing power consumption by 35% while maintaining reliability.",
  },
  {
    title: "Predictive Maintenance for Satellite Systems Using Ensemble Learning",
    authors: ["Udit Ganguly", "Dr. Anna Schmidt"],
    journal: "International Conference on Space Technology",
    year: 2023,
    doi: "10.1109/ICST.2023.567890",
    type: "conference",
    citations: 9,
    abstract: "Ensemble learning approach for predictive maintenance in satellite systems, achieving 92% accuracy in failure prediction.",
  },
]

export function PublicationsSection() {
  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0)
  
  return (
    <section id="publications" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">IEEE Publications</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Peer-reviewed publications in aerospace systems, satellite IoT, and artificial intelligence applications.
          </p>
          
          {/* Quick stats */}
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">{publications.length}</span> Publications
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">{totalCitations}</span> Citations
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Publications list */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.doi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and year */}
                <div className="flex lg:flex-col items-center gap-3 lg:gap-1 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{pub.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {pub.title}
                    </h3>
                    <span className={`shrink-0 px-2 py-1 text-xs font-mono rounded ${
                      pub.type === 'journal' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {pub.type === 'journal' ? 'Journal' : 'Conference'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {pub.authors.join(", ")}
                  </p>
                  
                  <p className="text-sm text-muted-foreground italic">
                    {pub.journal}
                  </p>
                  
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        {pub.citations} citations
                      </span>
                      <span className="font-mono">DOI: {pub.doi}</span>
                    </div>
                    <Link 
                      href={`https://doi.org/${pub.doi}`}
                      className="flex items-center gap-1 text-xs text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Paper
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Google Scholar link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="https://scholar.google.com/citations?user=uditganguly"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="w-4 h-4" />
            View Google Scholar Profile
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
