import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Master Of Science',
      institution: 'M.D.S. University, Ajmer , Rajasthan',
      description: ''
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Besant Technologies',
      year: '2024'
    }
  ];

  const expertiseAreas = [
    'Full Stack Development',
    'Modern Web Technologies',
    'Continuous Learning & Adaptation'
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Learning</h2>

        <div className="education-grid">
          <div className="education-column">
            <h3 className="subsection-title">Education</h3>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="education-header">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <span className="education-period">{edu.period}</span>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  {edu.description && <p className="education-description">{edu.description}</p>}
                </div>
              ))}
            </div>

            <h3 className="subsection-title">Certifications</h3>
            <div className="education-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon-wrapper">
                    <svg className="cert-badge-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                    </svg>
                  </div>
                  <div className="cert-details">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-column">
            <h3 className="subsection-title">Areas of Expertise</h3>
            <div className="certifications-list">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="certification-item">
                  <svg className="cert-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="learning-commitment">
              <h4>Continuous Learning</h4>
              <p>Actively contributing to open-source projects and sharing knowledge with the developer community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
