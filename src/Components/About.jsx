import React, { useEffect, useRef } from 'react';
import me from '../assets/me.jpg';
import '../App.css';

// MUI Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text" >
            <p>
              Hey, I’m M Balaji Reddy — a Computer Science undergrad who started by taming the front end with React,
              and then leveled up by diving deep into the backend. I’m not just dabbling; I’m building robust,
              scalable APIs and mastering the art of server-side logic. Skilled in HTML, CSS, JavaScript, React.js,
              Node.js, Express.js, SQL, and MongoDB — I’m a bug-fixing, API-wrangling, full-stack developer with a
              strong backend game, who sometimes even pretends that console.log is a debugging strategy (it kinda is).
            </p>
            <p>
              I enjoy building scalable web apps, turning coffee into code, and bringing ideas to life through clean UI
              and solid backend logic. Whether it’s structuring databases or styling pixels, I love the balance of
              creativity and logic that web development demands.
            </p>
          </div>
          <div className="about-image">
            <div className="profile-card" >
              <div className="profile-header">
                <div className="profile-avatar">
                  <img className="abc" src={me} alt="M Balaji Reddy" />
                </div>
                <h3>M Balaji Reddy</h3>
                <p>Developer</p>
              </div>
              <div className="profile-info">
                <div className="info-item">
                  <LocationOnIcon style={{ color: 'white', marginRight: '8px' }} />
                  <span>Vishakapatnam</span>
                </div>
                <div className="info-item">
                  <SchoolIcon style={{ color: 'White', marginRight: '8px' }} />
                  <span>Computer Science and Business Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
