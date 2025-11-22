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
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Shriya Tanwar</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences that make people's lives easier.
            Passionate about creating beautiful, functional, and user-friendly applications.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
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
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#646cff"
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.1C26.4,83.2,10,84.8,-5.8,83.3C-21.6,81.8,-36.8,77.2,-50.2,69.1C-63.6,61,-75.2,49.4,-81.8,35.2C-88.4,21,-90,4.2,-86.9,-11.4C-83.8,-27,-75.9,-41.4,-64.8,-52.2C-53.7,-63,-39.4,-70.2,-24.8,-76.9C-10.2,-83.6,4.7,-89.8,19.3,-88.5C33.9,-87.2,48.2,-78.4,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
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
