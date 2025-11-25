"use client"

import { useState, useEffect, useRef } from "react"

const experiences = [
  {
    year: "2024 — Present",
    role: "Lead Product Designer",
    company: "TechVision Studio",
    description: "Leading design systems and digital product strategy for enterprise clients",
  },
  {
    year: "2022 — 2024",
    role: "Senior Design Engineer",
    company: "Creative Labs",
    description: "Built and maintained comprehensive design system, mentored junior designers",
  },
  {
    year: "2020 — 2022",
    role: "UI/UX Designer",
    company: "StartupCo",
    description: "Designed end-to-end user experiences for SaaS platform used by 100k+ users",
  },
  {
    year: "2018 — 2020",
    role: "Junior Designer",
    company: "Digital Agency",
    description: "Created web designs and interactive prototypes for diverse clientele",
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-white uppercase mb-4">Career Path</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">Experience Timeline</h2>
          <div className="w-12 h-px bg-white mt-6" />
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex gap-6 sm:gap-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Node */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-white rounded-full mt-2 border-2 border-background" />
                <div className={`w-px ${index < experiences.length - 1 ? "h-32" : "h-0"} bg-white/30`} />
              </div>

              {/* Content */}
              <div className="pb-4 hover:bg-background/50 transition-colors p-4 rounded-lg cursor-pointer">
                <p className="text-xs tracking-widest text-white uppercase font-semibold mb-2">{exp.year}</p>
                <h3 className="text-xl font-semibold mb-1 text-white">{exp.role}</h3>
                <p className="text-sm text-white mb-3">{exp.company}</p>
                <p className="text-sm text-white/80 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
