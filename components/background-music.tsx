"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error)
        })
        setIsPlaying(true)
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/MONTAGEM XONADA.m4a" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
      
      <button
        onClick={toggleMusic}
        className="p-2 hover:bg-muted rounded-full transition-colors"
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  )
}
