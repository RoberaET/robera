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
        isVisible ? "bg-background/0 py-8" : "bg-[#F0EDCC]/70 backdrop-blur-md py-4 border-b border-border"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight">ROBERA MEKONNEN</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-lg tracking-wide hover:text-accent transition-colors">
            About
          </a>
          <a href="#skills" className="text-lg tracking-wide hover:text-accent transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-lg tracking-wide hover:text-accent transition-colors">
            Work
          </a>
          <div className="flex flex-col items-center gap-2">
            <a href="#contact" className="text-lg tracking-wide hover:text-accent transition-colors">
              Contact
            </a>
            <BackgroundMusic />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border mt-4 py-4">
          <nav className="flex flex-col gap-4 px-4">
            <a href="#about" className="text-sm tracking-wide hover:text-accent" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#skills" className="text-sm tracking-wide hover:text-accent" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="text-sm tracking-wide hover:text-accent" onClick={() => setIsOpen(false)}>
              Work
            </a>
            <a href="#contact" className="text-sm tracking-wide hover:text-accent" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <span className="text-sm">Music:</span>
              <BackgroundMusic />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
