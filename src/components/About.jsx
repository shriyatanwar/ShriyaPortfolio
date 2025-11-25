import './About.css';
import useParallax from '../hooks/useParallax';

const About = () => {
  const parallaxImage = useParallax(0.08);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="about-content">
          <div className="about-main">
            <p className="about-intro">
              Full Stack Developer with a unique blend of technical expertise and business acumen,
              currently contributing to innovative solutions at Abhyram IT Solutions Pvt Ltd.
            </p>

            <div className="about-grid">
              <div className="about-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3>Technical Excellence</h3>
                <p>
                  Specialized in building scalable, user-friendly software solutions using modern web technologies.
                  Strong focus on clean code, thoughtful design, and maintainable architectures.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Business Perspective</h3>
                <p>
                  Previous experience as Trainer and Business Coordinator provides unique insights into
                  client needs, team collaboration, and real-world business requirements.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3>Continuous Growth</h3>
                <p>
                  Actively expanding into Artificial Intelligence and automation, exploring how intelligent
                  systems can enhance products and user experiences.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3>Community Engagement</h3>
                <p>
                  Regular contributor to open-source projects and active participant in the developer
                  community, sharing knowledge and learning from peers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
