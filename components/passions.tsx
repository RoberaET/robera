"use client"

import { useState, useEffect, useRef } from "react"
import ElectricBorder from "./ElectricBorder"

const passions = [
  {
    icon: "🎯",
    title: "User-Centric Design",
    description:
      "I believe every pixel should serve the user. Great design isn't about aesthetics—it's about solving real problems elegantly.",
  },
  {
    icon: "⚡",
    title: "Performance & Optimization",
    description:
      "Fast, responsive experiences aren't nice-to-haves—they're essential. I obsess over every millisecond.",
  },
  {
    icon: "🌱",
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. I stay curious, experiment with new tools, and share knowledge with my community.",
  },
  {
    icon: "🤝",
    title: "Collaborative Creativity",
    description:
      "The best ideas come from diverse perspectives. I thrive in collaborative environments where everyone's voice matters.",
  },
  {
    icon: "♿",
    title: "Accessibility First",
    description:
      "Digital experiences should be inclusive. Accessibility isn't an afterthought—it's built into every design.",
  },
  {
    icon: "🌍",
    title: "Impact & Purpose",
    description:
      "I'm drawn to projects that create meaningful impact and solve problems that matter to people and society.",
  },
]

export default function Passions() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="passions" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-white uppercase mb-4">Values</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">What Drives Me</h2>
          <div className="w-12 h-px bg-white mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <ElectricBorder
                color="#7df9ff"
                speed={0.8}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 8 }}
              >
                <div className="group p-6 bg-background rounded-lg hover:shadow-xl transition-all duration-500">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {passion.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">{passion.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{passion.description}</p>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
