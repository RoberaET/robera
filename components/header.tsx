"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import BackgroundMusic from "./background-music"

interface HeaderProps {
  scrollY: number
}

export default function Header({ scrollY }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(scrollY < 100)
  }, [scrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "bg-background/0 py-4 sm:py-8" : "bg-[#F0EDCC]/70 backdrop-blur-md py-3 sm:py-4 border-b border-border"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-tight">
          <span className="hidden sm:inline">ROBERA MEKONNEN</span>
          <span className="sm:hidden">ROBERA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <a href="#about" className="text-lg tracking-wide hover:text-accent transition-colors">
            About
          </a>
          <a href="#skills" className="text-lg tracking-wide hover:text-accent transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-lg tracking-wide hover:text-accent transition-colors">
            Work
          </a>
          <a href="#contact" className="text-lg tracking-wide hover:text-accent transition-colors">
            Contact
          </a>
          <BackgroundMusic />
        </div>

        {/* Mobile Menu Button & Music Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <BackgroundMusic />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F0EDCC]/95 backdrop-blur-lg border-b border-border shadow-lg">
          <nav className="flex flex-col gap-1 px-4 py-3">
            <a 
              href="#about" 
              className="text-base py-3 px-3 rounded-lg tracking-wide hover:bg-[#02343F]/10 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-base py-3 px-3 rounded-lg tracking-wide hover:bg-[#02343F]/10 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-base py-3 px-3 rounded-lg tracking-wide hover:bg-[#02343F]/10 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="text-base py-3 px-3 rounded-lg tracking-wide hover:bg-[#02343F]/10 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
