import React, { useEffect, useRef, useState } from 'react'

const LazyVideo = ({ src, className, ...props }) => {
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Play video when visible
            if (videoRef.current) {
              videoRef.current.play().catch(error => {
                console.log('Video autoplay prevented:', error)
              })
            }
          } else {
            // Pause video when not visible to save resources
            if (videoRef.current) {
              videoRef.current.pause()
            }
          }
        })
      },
      {
        threshold: 0.25, // Trigger when 25% of video is visible
        rootMargin: '50px' // Start loading slightly before entering viewport
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      {...props}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  )
}

export default LazyVideo
