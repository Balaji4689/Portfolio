import React from 'react';
import '../App.css';

// MUI Icons
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // medal
import StarIcon from '@mui/icons-material/Star';
import ShowChartIcon from '@mui/icons-material/ShowChart'; // chart-line

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="skill-category">
          <div className="platform-stats">
            <div className="container">
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-header">
                    <div className="project-icon">
                      <ShowChartIcon style={{ fontSize: '2rem' }} />
                    </div>
                  </div>
                  <h3 className="project-title">Internship</h3>
                  <p className="project-description">
                    Company: Innovate
                    <br />
                    Duration: April 2025 – March 2025
                    <br />
                    Worked on building a web application to make attendance tracking easier and more secure using QR codes. Key features included QR code generation, real-time time updates, proxy prevention, user management, and detailed attendance reports. I was involved in all stages of the project—from planning and design to development, testing, and deployment.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">React Js</span>
                    <span className="tech-tag">Node Js</span>
                    <span className="tech-tag">Express Js</span>
                    <span className="tech-tag">API</span>
                    <span className="tech-tag">Mongodb</span>
                    <span className="tech-tag">Animation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">
              <EmojiEventsIcon style={{ fontSize: '2rem' }} />
            </div>
            <a href="https://leetcode.com/u/balaji_89/">
             <h3>Leet Code</h3>
            <p>Solved problems</p>
            <span className="achievement-date">62 problems</span>
            </a>
            </a>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <StarIcon style={{ fontSize: '2rem' }} />
            </div>
            <h3>Techxcelerate Hackathon</h3>
            <p>Top 12 Group</p>
            <span className="achievement-date">March 2025</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <StarIcon style={{ fontSize: '2rem' }} />
            </div>
            <h3>Build with India Hackathon</h3>
            <p>Qualified for Round 2</p>
            <span className="achievement-date">Feb 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
