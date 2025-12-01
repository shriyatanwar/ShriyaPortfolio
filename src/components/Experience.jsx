import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'SOFTWARE DEVELOPER',
      company: 'Abhyram IT Solutions PVT LTD',
      location: 'Bengaluru',
      period: 'AUGUST 2025 - PRESENT',
      responsibilities: [
        'Supporting development and maintenance of web applications using HTML, CSS, JavaScript, React.js, Java and MySQL.',
        'Assisting in building and testing RESTful APIs and integrating them with front-end components.',
        'Collaborating with senior developers to understand application architecture and coding standards.',
        'Participating in code reviews, debugging, and performance testing to ensure quality and functionality.',
        'Gaining hands-on experience in Agile workflows and project management processes.'
      ]
    },
    {
      id: 2,
      title: 'SOFTWARE DEVELOPER',
      company: 'Mechatron Technologies',
      location: 'Ajmer, Rajasthan',
      period: 'JAN 2024 – JULY 2025',
      responsibilities: [
        'Developed and maintained full-stack web applications using HTML, CSS, JavaScript, and modern frameworks like React.js for the front-end.',
        'Built and optimized RESTful APIs and server-side logic using Node.js',
        'Designed and managed database schemas, queries, and stored procedures using MySQL DB.',
        'Collaborated with cross-functional teams to deliver high-quality, scalable software products.',
        'Worked with version control systems (Git/GitHub) to manage codebase and support collaborative development.',
        'Integrated third-party APIs and payment gateways to enhance application functionality.'
      ]
    },
    {
      id: 3,
      title: 'SOFTWARE DEVELOPER TRAINEE',
      company: 'Mechatron Technologies',
      location: 'Ajmer, Rajasthan',
      period: 'OCT 2023 - DEC 2023',
      responsibilities: [
        'Assisted in developing interactive web modules using HTML5, CSS3, and JavaScript, ensuring responsive design and optimized performance.',
        'Collaborated with senior developers to understand full-stack application architecture and participated in building end-to-end web solutions.',
        'Contributed to front-end enhancement and back-end API integration tasks under guidance, following Agile development practices.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <h3 className="experience-title">{exp.title}</h3>
              <span className="experience-period">{exp.period}</span>
              <h4 className="experience-company">{exp.company}, {exp.location}</h4>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
