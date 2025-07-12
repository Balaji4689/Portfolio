import React , { useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_ycr0nbk', 'template_rbosez8', form.current, {
        publicKey: 'Rgqf90RSafcIPpMIN',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about algorithms and competitive programming.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <EmailIcon />
                  <span>bmaddula@gitam.in</span>
                </div>
                <div className="contact-method">
                  <LinkedInIcon />
                  <span>https://www.linkedin.com/in/m-balaji-reddy/</span>
                </div>
                <div className="contact-method">
                  <GitHubIcon />
                  <span>https://github.com/Balaji4689?tab=repositories</span>
                </div>
                <div className="contact-method">
                  <CodeIcon />
                  <span>https://leetcode.com/u/balaji_89/</span>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form" id="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                  <input type="text" id="subject" name="subject" required />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-group">
                  <textarea id="message" name="message" rows="5" required></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <button type="submit" className="btn btn-primary">
                  <span>Send Message</span>
                  <SendIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>
                &copy; M Balaji Reddy, Crafted with  and lots of coffee.
              </p>
            </div>
            <div className="footer-social">
              <a href="https://github.com/Balaji4689?tab=repositories" className="social-link">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/m-balaji-reddy/" className="social-link">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
