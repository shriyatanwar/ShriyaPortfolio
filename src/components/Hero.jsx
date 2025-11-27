import './Hero.css';
import useParallax from '../hooks/useParallax';

const Hero = () => {
  const parallaxOffset = useParallax(0.15);
  const parallaxSlow = useParallax(0.08);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div
          className="hero-content"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="hero-badge">Available for Work</div>
          <h1 className="hero-title">
            <span className="highlight">Shriya Tanwar</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Building scalable, user-friendly software solutions with modern web technologies.
            Passionate about creating exceptional digital experiences through clean code and thoughtful design.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">Current</span>
              <span className="stat-label">Position</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Full Stack</span>
              <span className="stat-label">Specialization</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">AI/ML</span>
              <span className="stat-label">Expanding Into</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              View Portfolio
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => window.print()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </button>
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div
          className="hero-image"
          style={{
            transform: `translateY(${parallaxSlow}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="image-placeholder">
            <div className="profile-image">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient)"
                  d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.1C26.4,83.2,10,84.8,-5.8,83.3C-21.6,81.8,-36.8,77.2,-50.2,69.1C-63.6,61,-75.2,49.4,-81.8,35.2C-88.4,21,-90,4.2,-86.9,-11.4C-83.8,-27,-75.9,-41.4,-64.8,-52.2C-53.7,-63,-39.4,-70.2,-24.8,-76.9C-10.2,-83.6,4.7,-89.8,19.3,-88.5C33.9,-87.2,48.2,-78.4,44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="hero-badges">
              <span className="skill-badge">React</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Python</span>
              <span className="skill-badge">Java</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
