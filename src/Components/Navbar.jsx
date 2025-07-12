import React, { useEffect, useRef, useState } from 'react';
import "../App.css"
import me from '../assets/me.jpg'

const Navbar = () => {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const navLinksRef = useRef([]);
  const typedTextRef = useRef(null);
  const backToTopRef = useRef(null);

  const [typedIndex, setTypedIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState('typing');
  const textArray = ['Full Stack Developer'];

  // Hamburger Toggle
  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;

    const handleHamburgerClick = () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleHamburgerClick);

    return () => hamburger.removeEventListener('click', handleHamburgerClick);
  }, []);

  // Typing Animation
  useEffect(() => {
    let timeout;

    if (typingDirection === 'typing') {
      if (charIndex < textArray[typedIndex].length) {
        typedTextRef.current.textContent += textArray[typedIndex].charAt(charIndex);
        timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        timeout = setTimeout(() => setTypingDirection('erasing'), 1500);
      }
    } else if (typingDirection === 'erasing') {
      if (charIndex > 0) {
        typedTextRef.current.textContent = textArray[typedIndex].substring(0, charIndex - 1);
        timeout = setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setTypingDirection('typing');
        setTypedIndex((typedIndex + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typingDirection, typedIndex]);


  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <p className="logo-text">M Balaji Reddy</p>
          </div>
          <div className="nav-menu" id="nav-menu" ref={navMenuRef}>
            {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link"
                ref={el => (navLinksRef.current[index] = el)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <div className="hamburger" id="hamburger" ref={hamburgerRef}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="accent-text">M Balaji Reddy</span>
              </h1>
              <p className="hero-subtitle">
                <span className="typed-text" ref={typedTextRef}></span>
                <span className="cursor">|</span>
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-primary">Contact me</a>
              </div>
            </div>
            <div>
              <img src={me} alt="" className='main-image ' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
