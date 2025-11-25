"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Design System 2.0",
    description: "Comprehensive design system handling 500+ components for enterprise scale",
    tags: ["Design", "React", "Documentation"],
    image: "🎨",
    color: "from-blue-400/20 to-blue-600/20",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with advanced filtering",
    tags: ["Frontend", "Data Viz", "React"],
    image: "📊",
    color: "from-purple-400/20 to-purple-600/20",
  },
  {
    title: "Mobile App Redesign",
    description: "Complete UX overhaul resulting in 40% increase in engagement",
    tags: ["UX Research", "Mobile", "Design"],
    image: "📱",
    color: "from-pink-400/20 to-pink-600/20",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack marketplace with 10k+ SKUs and complex checkout flow",
    tags: ["Full Stack", "Next.js", "Stripe"],
    image: "🛍️",
    color: "from-green-400/20 to-green-600/20",
  },
  {
    title: "Brand Identity System",
    description: "Complete brand guidelines and visual language for tech startup",
    tags: ["Branding", "Design", "Strategy"],
    image: "🏢",
    color: "from-orange-400/20 to-orange-600/20",
  },
  {
    title: "AI Chat Interface",
    description: "Conversational UI with streaming responses and context memory",
    tags: ["AI", "Frontend", "UX"],
    image: "🤖",
    color: "from-teal-400/20 to-teal-600/20",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-accent uppercase mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Featured Work</h2>
          <div className="w-12 h-px bg-accent mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-full border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all duration-300 bg-card hover:bg-secondary/30">
                {/* Image Area */}
                <div
                  className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl transition-transform duration-300 ${
                    hoveredProject === index ? "scale-110" : "scale-100"
                  }`}
                >
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex items-center gap-2 text-sm text-accent font-medium transition-all duration-300 ${
                      hoveredProject === index ? "translate-x-2 opacity-100" : "opacity-50"
                    }`}
                  >
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
