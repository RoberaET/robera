"use client"

import { useState, useEffect, useRef } from "react"

const skillCategories = [
  {
    name: "Design",
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "User Research"],
    level: 95,
  },
  {
    name: "Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Web APIs"],
    level: 90,
  },
  {
    name: "Strategy",
    skills: ["Product Strategy", "User Testing", "Brand Strategy", "Business Analysis", "Analytics"],
    level: 85,
  },
  {
    name: "Tools",
    skills: ["Figma", "VS Code", "Git", "Vercel", "Framer"],
    level: 92,
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-accent uppercase mb-4">Expertise</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Skills & Proficiency</h2>
          <div className="w-12 h-px bg-accent mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`space-y-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Category Header */}
              <div className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold tracking-wide mb-2">{category.name}</h3>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-sm text-muted-foreground">{category.level}%</span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                      hoveredSkill === index || hoveredSkill === null
                        ? "bg-accent/10 text-accent border border-accent/30"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
