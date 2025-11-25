"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-accent uppercase mb-4">Get in Touch</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">Let's Connect</h2>
          <div className="w-12 h-px bg-accent mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:robera4553@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span>robera4553@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/roberamekonnen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/RoberaET"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a
                href="https://t.me/ROBERAMEKONNEN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Send size={20} className="group-hover:scale-110 transition-transform" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium tracking-wide block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:border-accent focus:outline-none transition-colors text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium tracking-wide block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:border-accent focus:outline-none transition-colors text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium tracking-wide block mb-2">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:border-accent focus:outline-none transition-colors text-sm resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors rounded-sm text-sm font-medium tracking-wide"
            >
              {submitted ? "✓ Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
