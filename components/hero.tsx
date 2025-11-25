"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const roles = ["Designer", "Developer", "Strategist", "Creative"]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-12">
        {/* Animated Avatar Placeholder */}
        <div
          className={`w-24 h-24 mx-auto rounded-full bg-muted border border-border flex items-center justify-center transition-all duration-1000 ${
            isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-accent/10" />
        </div>

        {/* Main Heading */}
        <div className={`space-y-4 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight leading-tight text-balance">
            Building Tomorrow's <span className="text-accent">Networks</span>
          </h1>

          {/* Role */}
          <div className="h-8 flex items-center justify-center">
            <p className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide">
              I'm a <span className="text-accent font-medium">Network Security Engineer</span>
            </p>
          </div>
        </div>

        {/* Subheading */}
        <p
          className={`text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Designing resilient, intelligent infrastructures where threats are outsmarted and networks stay unstoppable.
        </p>

        {/* CTA Button */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm text-sm tracking-wide"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border hover:border-foreground transition-colors rounded-sm text-sm tracking-wide"
          >
            Let's Talk
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`flex justify-center pt-12 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href="#about" className="animate-bounce">
            <ChevronDown size={24} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
