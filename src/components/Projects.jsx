import { useState } from 'react';
import './Projects.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { elementRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '📋',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive charts, and weather alerts.',
      category: 'mobile',
      technologies: ['React Native', 'Weather API', 'Redux'],
      image: '🌤️',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio template with smooth animations, responsive design, and dark mode support.',
      category: 'design',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      image: '💼',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
      category: 'web',
      technologies: ['Vue.js', 'Chart.js', 'Node.js'],
      image: '📊',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and progress with personalized recommendations.',
      category: 'mobile',
      technologies: ['React Native', 'Express', 'PostgreSQL'],
      image: '💪',
      link: '#',
      github: '#',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={elementRef}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${hasIntersected ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
                <a href={project.github} className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
