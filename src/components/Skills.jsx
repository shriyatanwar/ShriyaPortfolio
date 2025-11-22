import './Skills.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useCountUp from '../hooks/useCountUp';

const SkillItem = ({ skill, delay, shouldAnimate }) => {
  const animatedLevel = useCountUp(skill.level, 1500, shouldAnimate);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{animatedLevel}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: shouldAnimate ? `${skill.level}%` : '0%',
            transition: 'width 1.5s ease-out',
            transitionDelay: `${delay}s`,
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Java', level: 88 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 80 },
        { name: 'CI/CD', level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={elementRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    skill={skill}
                    delay={(categoryIndex * 0.1) + (skillIndex * 0.05)}
                    shouldAnimate={hasIntersected}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
