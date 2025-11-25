"use client"

import { useState, useEffect, useRef } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div>
              <p className="text-sm tracking-widest text-white uppercase mb-4">About</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">My Story</h2>
              <div className="w-12 h-px bg-white mt-6" />
            </div>

            <div className="space-y-6 text-white/90 leading-relaxed">
              <p>
                I'm a creative professional passionate about building digital experiences that matter. With a deep
                background in design thinking and development, I bridge the gap between aesthetic vision and technical
                execution.
              </p>
              <p>
                For the past 5 years, I've worked with forward-thinking brands and startups, creating products that
                users genuinely love. I believe great design is invisible—it simply works, beautifully.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring new creative mediums, contributing to
                open-source projects, or thinking about how technology can solve real human problems.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-white">Core Values</h3>
              <div className="space-y-2 text-sm text-white/90">
                <p>✦ Simplicity through thoughtful design</p>
                <p>✦ User-centric problem solving</p>
                <p>✦ Continuous learning & growth</p>
                <p>✦ Collaboration over ego</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-32 h-32 mx-auto rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <span className="text-4xl">📐</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Creative Vision</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center hover:bg-accent/5 transition-colors">
                  <span className="text-4xl">💡</span>
                </div>
                <div className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center hover:bg-accent/5 transition-colors">
                  <span className="text-4xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
