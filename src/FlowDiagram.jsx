import React from 'react'
import './FlowDiagram.css'

const FlowDiagram = ({ t }) => {
  return (
    <div className="flow-diagram">
      <div className="flow-row">
        <div className="flow-node printer">
          <div className="flow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 L60 25 L75 25 L75 45 L60 45 L60 60 L40 60 L40 45 L25 45 L25 25 L40 25 Z M45 65 L55 65 L55 85 L45 85 Z"/>
            </svg>
          </div>
          <h3>{t.visualMap.printer.title}</h3>
          <p>{t.visualMap.printer.description}</p>
        </div>

        <div className="flow-connector horizontal">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="2"/>
            <polygon points="95,5 100,10 95,15" fill="currentColor"/>
          </svg>
        </div>

        <div className="flow-node rmn">
          <div className="flow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
              <rect x="20" y="25" width="60" height="50" rx="5"/>
              <circle cx="35" cy="45" r="8"/>
              <circle cx="65" cy="45" r="8"/>
              <path d="M30 60 Q50 70 70 60" stroke="white" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          <h3>{t.visualMap.rmn.title}</h3>
          <p>{t.visualMap.rmn.description}</p>
        </div>
      </div>

      <div className="flow-connector-vertical-set">
        <div className="flow-connector vertical left">
          <svg viewBox="0 0 20 100" preserveAspectRatio="none">
            <line x1="10" y1="0" x2="10" y2="100" stroke="currentColor" strokeWidth="2"/>
            <polygon points="5,95 10,100 15,95" fill="currentColor"/>
          </svg>
        </div>
        <div className="flow-connector vertical right">
          <svg viewBox="0 0 20 100" preserveAspectRatio="none">
            <line x1="10" y1="0" x2="10" y2="100" stroke="currentColor" strokeWidth="2"/>
            <polygon points="5,95 10,100 15,95" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="flow-row">
        <div className="flow-node workstation">
          <div className="flow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
              <rect x="25" y="20" width="50" height="35" rx="3"/>
              <rect x="30" y="60" width="40" height="3"/>
              <rect x="35" y="63" width="30" height="15" rx="2"/>
              <circle cx="40" cy="35" r="3"/>
              <circle cx="60" cy="35" r="3"/>
            </svg>
          </div>
          <h3>{t.visualMap.workstation.title}</h3>
          <p>{t.visualMap.workstation.description}</p>
        </div>

        <div className="flow-connector horizontal-flipped">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="2"/>
            <polygon points="95,5 100,10 95,15" fill="currentColor"/>
          </svg>
        </div>

        <div className="flow-node ar">
          <div className="flow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="25"/>
              <path d="M50 30 L55 45 L70 45 L58 55 L63 70 L50 60 L37 70 L42 55 L30 45 L45 45 Z" fill="white"/>
            </svg>
          </div>
          <h3>{t.visualMap.ar.title}</h3>
          <p>{t.visualMap.ar.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FlowDiagram
