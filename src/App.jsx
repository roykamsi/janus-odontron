import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <nav>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>A Beam Proton Therapy for Tumor Disease</h1>
          <h2>Like a 3D printer, but double headed.</h2>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-item">
              <img src="/images/Risorsa-3@2x.png" alt="Extends life" />
              <p>Extends and improve the life of patients</p>
            </div>
            <div className="benefit-item">
              <img src="/images/Risorsa-4@2x.png" alt="Rapid hospitalization" />
              <p>Rapid hospitalization of patients</p>
            </div>
            <div className="benefit-item">
              <img src="/images/Risorsa-1@2x.png" alt="No side effects" />
              <p>Little or no post therapy side effects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Section */}
      <section className="prototype">
        <div className="container">
          <h1>A new Prototype.</h1>
          <h2>Developed against a harmful disease | JANUS ODONTRON®</h2>

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
            The primary concept of this project is accelerated protons which have
            the advantage of attacking a specific area of the body affected by
            cancer without harming neighboring cells.<br/><br/>
            As a consequence of this advantage, this technology can drastically
            reduce the side effects of normal therapy. TBI (Total Body Irradiation)
            is also identified in the possible therapies.
          </p>
        </div>
      </section>

      {/* Future Planning Section */}
      <section className="future-planning">
        <div className="container">
          <div className="two-column">
            <div className="column">
              <h2>Future Planning</h2>
              <p>
                Janus-Odontron will be part of the radiotherapy machines industry as{' '}
                <strong>the first machine is capable of two gantry shot beams</strong>.
                Currently this industry operates with the Proton beam therapy (PBT) and is
                composed of many other niches specialized in five main types: type, product type,
                application, end user, and region. Based on the region, the radiotherapy market
                is segmented into the Americas, Europe, Asia-Pacific, and the Middle East & Africa.
              </p>
            </div>
            <div className="column">
              <h2>Not Only A Diagnostic Device</h2>
              <p>
                A wave guide is located inside each gantry.<br/>
                Inside the mechanical unit there are also{' '}
                <strong>nanotechnological back off circuits</strong> for the transformation
                of digitally controlled optical motions and gyroscopes, designed to{' '}
                <strong>stabilize rotational motions</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hadrontherapy Advantages Section */}
      <section className="hadrontherapy-section">
        <div className="container">
          <h2>Advantages of the hadrontherapy</h2>
          <h1>Precision & no harm</h1>
          <p className="credit">All rights to NHS for the video</p>
        </div>
      </section>

      {/* Visual Map Section */}
      <section className="visual-map">
        <div className="container">
          <h1>Visual rapresentation of the map of the acquisition:</h1>
          <h2><em>centering and simulation of the therapy.*</em></h2>

          <div className="map-diagram">
            <img src="/images/Mappa-Janus.png" alt="Therapy Map" />
          </div>

          <div className="map-grid">
            <div className="map-item">
              <h3>3D Printer</h3>
              <p>Print the cast of the tumor.</p>
            </div>
            <div className="map-item">
              <h3>RMN</h3>
              <p>Acquires and centers the tumor.</p>
            </div>
            <div className="map-item">
              <h3>Workstation</h3>
              <p>Augmented reality workspace (VR management).<br/>
              That controls a robot simulator liked to a quantistic computer.</p>
            </div>
            <div className="map-item">
              <h3>Augmented Reality</h3>
              <p>Physically performs the therapy simulation</p>
            </div>
          </div>

          <p className="footnote">
            * The connections between all devices are based on high-speed data lines on zero and silicon.
          </p>
        </div>
      </section>

      {/* Therapy Robot Section */}
      <section className="therapy-robot">
        <div className="container">
          <h1>Therapy Simulating Robot</h1>
          <h2>Controlled by the workstation</h2>

          <div className="robot-content">
            <div className="robot-image">
              <img src="/images/Robot-Quantico.jpg" alt="Therapy Simulating Robot" />
            </div>
            <div className="robot-text">
              <p>
                Performs therapy simulation controlled by a special augmented reality
                workstation with high-speed data cables. Inside the robot there is an EPROM
                processor that allows you to "talk" with the quantum processor and with the
                console of the isocentric proton launcher.
              </p>
              <button className="btn-primary">Discover more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantic Computer Section */}
      <section className="quantic-computer">
        <div className="container">
          <h1>Quantic Computer Processor</h1>
          <h2>Designed to support the workstation and the Simulating Robot</h2>

          <div className="computer-image">
            <img src="/images/Quantic-Computer.jpg" alt="Quantic Computer" />
          </div>

          <p className="description">
            Each physical and radiotherapy process is controlled by a 100 qbit ion
            capture quantum computer.
          </p>

          <button className="btn-primary">Discover more</button>
        </div>
      </section>

      {/* Metamaterials Section */}
      <section className="metamaterials">
        <div className="container">
          <h1>Metamaterials</h1>
          <h2>And why they are important to make the device more flexible</h2>

          <div className="metamaterials-image">
            <img src="/images/Metamateriali.png" alt="Metamaterials" />
          </div>

          <p>
            Similarly to aeronaval technologies, they would be made of Titanium,
            Carbon Fiber and metamaterials that give them peculiar characteristics
            of resistance, lightness and good response to mechanical stress.
          </p>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="industry-applications">
        <div className="container">
          <h1>Probable Industry Applications</h1>
          <h2>The industries that can be involved this technology</h2>

          <div className="applications-image">
            <img src="/images/Aree-di-Interesse.png" alt="Industry Applications" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h1>But there's more.</h1>
          <h2>For further information.</h2>

          <div className="cta-buttons">
            <a href="/contact-us" className="btn-primary">Contact us</a>
            <span className="or">or</span>
            <button className="btn-secondary">A glance to Odontron</button>
          </div>
        </div>
      </section>

      {/* Attention Notice */}
      <section className="notice">
        <div className="container">
          <h3>Attention</h3>
          <p>
            Modifications are available regarding the motors of the Janus-Odontron
            ballistic launchers, of the simulator robot that use accelerated ions.
            In case of real interest in these changes, please contact us for further
            information.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Janus-Odontron</p>
          <p>
            Website designed by{' '}
            <a href="https://www.roykamsi.com" target="_blank" rel="noopener noreferrer">
              <strong>roykamsi.com</strong>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
