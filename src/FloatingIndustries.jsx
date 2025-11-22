import React from 'react'
import './FloatingIndustries.css'

const FloatingIndustries = ({ language }) => {
  const industries = language === 'ITA' ? [
    'Sanità',
    'Ricerca Medica',
    'Oncologia',
    'Radioterapia',
    'Fisica Nucleare',
    'Ingegneria Biomedica',
    'Nanotecnologia',
    'Robotica Medica',
    'Informatica Quantistica'
  ] : [
    'Healthcare',
    'Medical Research',
    'Oncology',
    'Radiotherapy',
    'Nuclear Physics',
    'Biomedical Engineering',
    'Nanotechnology',
    'Medical Robotics',
    'Quantum Computing'
  ]

  return (
    <div className="floating-industries">
      {industries.map((industry, index) => (
        <div
          key={index}
          className={`industry-bubble bubble-${index + 1}`}
          style={{
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${15 + index * 2}s`
          }}
        >
          <span>{industry}</span>
        </div>
      ))}
    </div>
  )
}

export default FloatingIndustries
