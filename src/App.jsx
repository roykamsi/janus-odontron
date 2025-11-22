import React, { useState } from 'react'
import { useLanguage } from './LanguageContext.jsx'
import FlowDiagram from './FlowDiagram.jsx'
import LazyVideo from './LazyVideo.jsx'
import VideoLightbox from './VideoLightbox.jsx'
import './App.css'

function App() {
  const { language, toggleLanguage, t } = useLanguage()
  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false)

  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/images/Janus-Logo.png" alt="Janus Odontron" />
            </div>
            <nav>
              <a href="mailto:info@janus-odontron.com" className="nav-link">
                {t.nav.contact}
              </a>
              <div className="language-selector">
                <button
                  className={`lang-btn ${language === 'ITA' ? 'active' : ''}`}
                  onClick={() => toggleLanguage('ITA')}
                >
                  ITA
                </button>
                <span className="lang-separator">/</span>
                <button
                  className={`lang-btn ${language === 'ENG' ? 'active' : ''}`}
                  onClick={() => toggleLanguage('ENG')}
                >
                  ENG
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.subtitle}</h2>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-item">
              <img src="/images/Risorsa-3@2x.png" alt={t.benefits.extends} />
              <p>{t.benefits.extends}</p>
            </div>
            <div className="benefit-item">
              <img src="/images/Risorsa-4@2x.png" alt={t.benefits.rapid} />
              <p>{t.benefits.rapid}</p>
            </div>
            <div className="benefit-item">
              <img src="/images/Risorsa-1@2x.png" alt={t.benefits.noSideEffects} />
              <p>{t.benefits.noSideEffects}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Prototype Section */}
      <section className="prototype">
        <div className="container">
          <h1>{t.prototype.title}</h1>
          <h2>{t.prototype.subtitle}</h2>

          <div className="video-container">
            <iframe
              src="https://player.vimeo.com/video/548411150"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Janus Odontron"
            ></iframe>
          </div>

          <p className="description">
            {t.prototype.description1}<br/><br/>
            {t.prototype.description2}
          </p>
        </div>
      </section>

      {/* Future Planning Section */}
      <section className="future-planning">
        <div className="container">
          <div className="two-column">
            <div className="column">
              <h2>{t.planning.title}</h2>
              <p>{t.planning.description}</p>
              <ol>
                <li>{t.planningFutureNiches[1]}</li>
                <li>{t.planningFutureNiches[2]}</li>
                <li>{t.planningFutureNiches[3]}</li>
                <li>{t.planningFutureNiches[4]}</li>
                <li>{t.planningFutureNiches[5]}</li>
              </ol>
              <p>{t.planning.afterList}</p>
            </div>
            <div className="column">
              <h2>{t.device.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: t.device.description }} />
            </div>
          </div>
        </div>
      </section>

      {/* Hadrontherapy Advantages Section */}
      <section className="">
        <div className="hadrontherapy-section">
          <LazyVideo
            src="/videos/The-NHS-Proton-Beam-Therapy-Programme_Gelatina-1.mp4"
            className="hadrontherapy-video-bg"
          />
          <div className="hadrontherapy-overlay"></div>
          <div className="container-xl hadrontherapy-content">
            <h2>{t.hadrontherapy.title}</h2>
            <h1>{t.hadrontherapy.subtitle}</h1>
            <button
              className="video-play-button"
              onClick={() => setIsVideoLightboxOpen(true)}
              aria-label="Play video with sound"
            >
              <span className="play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              {language === 'ITA' ? 'Guarda il video' : 'Watch video'}
            </button>
          </div>
        </div>
        <div className="credit-wrapper">
          <p>{t.hadrontherapy.credit}</p>
        </div>
      </section>

      {/* Visual Map Section */}
      <section className="visual-map">
        <div className="container">
          <h1>{t.visualMap.title}</h1>
          <h2><em>{t.visualMap.subtitle}</em></h2>

          <FlowDiagram t={t} />

          <p className="footnote">{t.visualMap.footnote}</p>
        </div>
      </section>

      {/* Therapy Robot Section */}
      <section className="therapy-robot">
        <div className="container">
          <h1>{t.robot.title}</h1>
          <h2>{t.robot.subtitle}</h2>

          <div className="robot-content">
            <div className="robot-image">
              <img src="/images/Robot-Quantico.jpg" alt={t.robot.title} />
            </div>
            <div className="robot-text">
              <p>{t.robot.description}</p>
              {/* <button className="btn-primary">{t.robot.button}</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Quantic Computer Section */}
      <section className="quantic-computer">
        <div className="container">
          <h1>{t.quantum.title}</h1>
          <h2>{t.quantum.subtitle}</h2>

          <div className="computer-image">
            <img src="/images/Quantic-Computer.jpg" alt={t.quantum.title} />
          </div>

          <p className="description">{t.quantum.description}</p>

          {/* <button className="btn-primary">{t.quantum.button}</button> */}
        </div>
      </section>

      {/* Metamaterials Section */}
      <section className="metamaterials">
        <div className="container">
          <h1>{t.metamaterials.title}</h1>
          <h2>{t.metamaterials.subtitle}</h2>

          <div className="metamaterials-image">
            <img src="/images/Metamateriali-BIANCO.gif" alt={t.metamaterials.title} />
          </div>

          <p>{t.metamaterials.description}</p>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="industry-applications">
        <div className="container-xl">
          <h1>{t.industry.title}</h1>
          <h2>{t.industry.subtitle}</h2>

          <div className="applications-image">
            <img src="/images/Aree-di-Interesse.png" alt={t.industry.title} />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h1>{t.cta.title}</h1>
          <p>{t.cta.subtitle}</p>

          <div className="cta-buttons">
            <a href="mailto:info@janus-odontron.com" className="btn-primary">
              {t.cta.contact}
            </a>
            {/* <span className="or">{t.cta.or}</span> */}
            {/* <button className="btn-secondary">{t.cta.odontron}</button> */}
          </div>
        </div>
      </section>

      {/* Attention Notice */}
      <section className="notice">
        <div className="container">
          <h4>{t.notice.title}</h4>
          <p>{t.notice.description}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{t.footer.copyright}</p>
          <p>
            {t.footer.designed}{' '}
            <a href="https://www.roykamsi.com" target="_blank" rel="noopener noreferrer">
              <strong>roykamsi.com</strong>
            </a>
          </p>
        </div>
      </footer>

      {/* Video Lightbox */}
      <VideoLightbox
        videoSrc="/videos/The-NHS-Proton-Beam-Therapy-Programme_Gelatina-1.mp4"
        isOpen={isVideoLightboxOpen}
        onClose={() => setIsVideoLightboxOpen(false)}
      />
    </div>
  )
}

export default App
