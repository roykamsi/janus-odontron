import React, { createContext, useState, useContext, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to ITA
    const savedLanguage = localStorage.getItem('janus-language')
    return savedLanguage || 'ITA'
  })

  useEffect(() => {
    // Save language to localStorage whenever it changes
    localStorage.setItem('janus-language', language)
  }, [language])

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
