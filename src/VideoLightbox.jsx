import React, { useState, useEffect, useRef } from 'react'
import './VideoLightbox.css'

const VideoLightbox = ({ videoSrc, isOpen, onClose }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Play video with audio when lightbox opens
      videoRef.current.play()
    } else if (!isOpen && videoRef.current) {
      // Pause and reset when closing
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  useEffect(() => {
    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="video-lightbox-overlay" onClick={onClose}>
      <div className="video-lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <video
          ref={videoRef}
          className="lightbox-video"
          controls
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideoLightbox
