import React, { useEffect, useRef } from 'react';
import '../App.css';

// MUI Icons
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  return (
    <section id="projects" className="projects" >
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            
            <div className="project-header">
              <div className="project-icon">
                <ShowChartIcon style={{ fontSize: '2rem'}} />
              </div>
              <div className="project-links">
                <a href="https://github.com/Balaji4689/Fuel_Delivery_Application" className="project-link" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
                <a href="https://fuel-delivery-application-frontend.onrender.com" className="project-link" target="_blank" rel="noopener noreferrer">
                  <LaunchIcon />
                </a>
              </div>
            </div>
            <h3 className="project-title">Fuel Delivery Application</h3>
            <p className="project-description">
              I independently developed a full-stack fuel delivery application.<br/>
              Fuel24x7 has three categories: Customers, Vendors, and Delivery Persons. Customers can order petrol or diesel online by choosing the quantity, type, and delivery location.
              They can schedule deliveries, track orders live, and make online payments. Vendors are fuel stations that register on the app to manage their fuel stock, accept customer orders, and monitor sales. Delivery Persons are responsible for safely delivering the fuel to customers. 
              They can view assigned orders, follow navigation, and update delivery status through their dashboard, ensuring smooth and timely service.
              <br/><br/>
              <strong>Key Features:</strong><br/>
              Role-Based Access Control – Secure authentication for different users.<br/>
              Optimized Performance – Thorough testing & debugging.
            </p>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React Js</span>
              <span className="tech-tag">Node Js</span>
              <span className="tech-tag">Express Js</span>
              <span className="tech-tag">Mongo DB</span>
              <span className="tech-tag">API</span>
              <span className="tech-tag">Animation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Projects;
