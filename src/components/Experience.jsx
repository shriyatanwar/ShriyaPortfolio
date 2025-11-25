import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Abhyram IT Solutions Pvt Ltd, Bangalore, Karnataka',
      period: 'Present',
      description: 'Contributing to building scalable, user-friendly, and efficient software solutions. Working with modern web technologies to solve real-world problems through clean code and thoughtful design.',
      responsibilities: [
        'Developing and maintaining full-stack web applications',
        'Collaborating with cross-functional teams to deliver high-quality software',
        'Implementing responsive and user-friendly interfaces',
        'Writing clean, maintainable, and scalable code'
      ]
    },
    {
      id: 2,
      title: 'Trainer & Business Coordinator',
      company: 'Mechatron Technologies, Ajmer, Rajasthan',
      period: 'Before Current Position',
      description: 'Developed strong communication, problem-solving, and collaboration skills while training teams and coordinating business operations.',
      responsibilities: [
        'Conducted training sessions for team members',
        'Coordinated business operations and client communications',
        'Developed training materials and documentation',
        'Built strong client relationships and ensured satisfaction'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
