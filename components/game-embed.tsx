"use client"

import { useRef, useState, useCallback } from "react"
import { Maximize2, Minimize2 } from "lucide-react"

interface GameEmbedProps {
  src: string
  width?: number
  height?: number
}

export function GameEmbed({ src, width = 1280, height = 720 }: GameEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const requestFs = useCallback(async () => {
    const elem = containerRef.current || iframeRef.current
    if (!elem) return
    try {
      if (elem.requestFullscreen) await elem.requestFullscreen()
      // @ts-ignore
      else if (elem.webkitRequestFullscreen) await elem.webkitRequestFullscreen()
      // @ts-ignore
      else if (elem.mozRequestFullScreen) await elem.mozRequestFullScreen()
      // @ts-ignore
      else if (elem.msRequestFullscreen) await elem.msRequestFullscreen()
      setIsFullscreen(true)
    } catch {}
  }, [])

  const exitFs = useCallback(async () => {
    try {
      if (document.exitFullscreen) await document.exitFullscreen()
      // @ts-ignore
      else if (document.webkitExitFullscreen) await document.webkitExitFullscreen()
      // @ts-ignore
      else if (document.mozCancelFullScreen) await document.mozCancelFullScreen()
      // @ts-ignore
      else if (document.msExitFullscreen) await document.msExitFullscreen()
      setIsFullscreen(false)
    } catch {}
  }, [])

  return (
    <div ref={containerRef} className="relative w-full bg-black rounded-none">
      {/* 16:9 responsive container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <iframe
          ref={iframeRef}
          src={src}
          title="BloodMoney Online"
          width={width}
          height={height}
          frameBorder={0}
          scrolling="no"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="no-referrer"
        />
      </div>

      <button
        type="button"
        onClick={isFullscreen ? exitFs : requestFs}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-white/90 hover:bg-white text-gray-900 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium shadow"
      >
        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>
    </div>
  )
}
