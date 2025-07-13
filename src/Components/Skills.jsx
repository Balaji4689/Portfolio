import React, { useEffect, useRef } from 'react';
import '../App.css'

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
              const width = bar.getAttribute('data-width');
              setTimeout(() => {
                bar.style.width = width;
              }, 200);
            });
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-code"></i>
              Programming Languages
            </h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="90%"></div>
                </div>
              </div>

              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="88%"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-project-diagram"></i>
              Algorithms &amp; DS
            </h3>
            <div className="skills-tags">
              <span className="skill-tag">Sliding Window &amp; Two Pointers</span>
              <span className="skill-tag">Binary Search</span>
              <span className="skill-tag">Queue</span>
              <span className="skill-tag">Stack</span>
              <span className="skill-tag">linked list</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-tools"></i>
              Technologies &amp; Tools
            </h3>
            <div className="skills-tags">
              <span className="skill-tag">HTMl</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Java Script</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">ExpressJS</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
