"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Passions from "@/components/passions"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import GridScan from "@/components/GridScan"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full bg-background text-foreground">
      <GridScan
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#392e4e"
        gridScale={0.1}
        scanColor="#FF9FFC"
        scanOpacity={0.4}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
      />
      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Passions />
      <Contact />
      <Footer />
    </main>
  )
}
