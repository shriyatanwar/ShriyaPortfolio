import './About.css';
import useParallax from '../hooks/useParallax';

const About = () => {
  const parallaxImage = useParallax(0.08);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer currently working at Abhyram IT Solutions Pvt Ltd, where I contribute to building scalable, user-friendly, and efficient software solutions. I love solving real-world problems through clean code, thoughtful design, and modern web technologies.
            </p>
            <p>
              Before transitioning into full-stack development, I worked as a Trainer 
              and Business Coordinator, where I developed strong communication, 
              problem-solving, and collaboration skills. This background gives me a 
              unique perspective—combining technical thinking with real-world 
              business understanding and user empathy.
            </p>
            <p>
              My journey in web development started several years ago, and since
              then, I've been constantly learning and adapting to new technologies.
              I believe in writing code that is not only functional but also
              maintainable and scalable.
            </p>
            <p>
              Along with full stack development, I’m expanding my skill set in Artificial Intelligence, 
              exploring how automation and 
              intelligent systems can enhance real-world products and user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div
            className="about-image"
            style={{
              transform: `translateY(${parallaxImage}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="image-wrapper">
              <div className="profile-placeholder">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#646cff"
                    d="M39.5,-65.5C51.4,-58.7,61.4,-47.5,68.3,-34.8C75.2,-22.1,79,-7.9,77.3,5.6C75.6,19.1,68.4,31.9,59.1,42.3C49.8,52.7,38.4,60.7,25.5,65.8C12.6,70.9,-1.8,73.1,-15.3,70.2C-28.8,67.3,-41.4,59.3,-52.3,49.2C-63.2,39.1,-72.4,27,-76.8,13.2C-81.2,-0.6,-80.8,-16.1,-75.1,-30C-69.4,-43.9,-58.4,-56.2,-45.3,-62.5C-32.2,-68.8,-16.1,-69.1,-0.7,-67.9C14.7,-66.7,29.4,-64,39.5,-65.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
