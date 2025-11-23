import React, { useEffect } from 'react'
import './ImageLightbox.css'

const ImageLightbox = ({ imageSrc, imageAlt, isOpen, onClose }) => {
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
    <div className="image-lightbox-overlay" onClick={onClose}>
      <div className="image-lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <img
          src={imageSrc}
          alt={imageAlt}
          className="lightbox-image"
        />
      </div>
    </div>
  )
}

export default ImageLightbox
