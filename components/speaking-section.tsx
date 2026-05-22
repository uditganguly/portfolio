"use client"

import { motion } from "framer-motion"
import { Mic, MapPin, Calendar, Video, Users } from "lucide-react"
import Link from "next/link"

const speakingEngagements = [
  {
    title: "The Future of Satellite IoT: AI-Driven Communication Networks",
    event: "IEEE Aerospace Conference 2024",
    location: "Big Sky, Montana, USA",
    date: "March 2024",
    type: "Keynote",
    attendees: "500+",
    recording: "https://ieee.tv/aerospace-2024/keynote",
    description: "Explored emerging trends in AI-powered satellite IoT networks and their applications in global connectivity.",
  },
  {
    title: "Machine Learning for Space: From Theory to Orbit",
    event: "International Space Development Conference",
    location: "Los Angeles, California, USA",
    date: "May 2024",
    type: "Workshop",
    attendees: "150+",
    recording: null,
    description: "Hands-on workshop demonstrating practical ML implementations for satellite systems and CubeSat missions.",
  },
  {
    title: "Autonomous Spacecraft Systems: The Role of Deep Learning",
    event: "SpaceTech Summit 2023",
    location: "Singapore",
    date: "November 2023",
    type: "Talk",
    attendees: "300+",
    recording: "https://spacetech.sg/summit-2023/talks",
    description: "Presented research on deep learning applications in autonomous spacecraft navigation and decision-making.",
  },
  {
    title: "Building Resilient Satellite Networks with AI",
    event: "IEEE International Conference on Communications",
    location: "Rome, Italy",
    date: "June 2023",
    type: "Paper Presentation",
    attendees: "200+",
    recording: null,
    description: "Technical presentation of our research on AI-driven network resilience in satellite constellations.",
  },
  {
    title: "CubeSat Innovation: Democratizing Space Research",
    event: "Small Satellite Conference",
    location: "Logan, Utah, USA",
    date: "August 2023",
    type: "Panel Discussion",
    attendees: "400+",
    recording: "https://smallsat.org/2023/panels",
    description: "Panel discussion on lowering barriers to space research through innovative CubeSat technologies.",
  },
]

export function SpeakingSection() {
  return (
    <section id="speaking" className="relative py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Speaking</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Conference Appearances</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Sharing research insights and industry perspectives at international conferences, workshops, and academic events.
          </p>
        </motion.div>
        
        {/* Timeline layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />
          
          {speakingEngagements.map((event, index) => (
            <motion.div
              key={`${event.event}-${event.date}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:pr-[50%] lg:text-right' : 'lg:pl-[50%] lg:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-3 h-3 rounded-full bg-primary animate-pulse-glow ${
                index % 2 === 0 
                  ? 'left-[-6px] lg:left-auto lg:right-[-6px] lg:translate-x-1/2' 
                  : 'left-[-6px] lg:left-[-6px] lg:-translate-x-1/2'
              }`} />
              
              <div className={`group ml-6 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                <div className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:text-left' : ''
                }`}>
                  {/* Event type badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-1 text-xs font-mono rounded ${
                      event.type === 'Keynote' 
                        ? 'bg-primary/20 text-primary' 
                        : event.type === 'Workshop'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {event.type}
                    </span>
                    {event.recording && (
                      <Link 
                        href={event.recording}
                        className="flex items-center gap-1 text-xs text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Video className="w-3 h-3" />
                        Watch
                      </Link>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mb-2">
                    {event.event}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {event.attendees} attendees
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Speaking invitation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center"
        >
          <Mic className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Interested in having me speak?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            {"I'm available for keynotes, technical talks, workshops, and panel discussions on aerospace AI, satellite IoT, and space technology."}
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
