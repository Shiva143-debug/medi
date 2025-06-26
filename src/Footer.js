import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">
              We are dedicated to providing the best ACCA training and education to help you achieve your career goals in accounting and finance.
              Our expert faculty and comprehensive study materials ensure your success.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#" className="footer-link">Home</a></li>
              <li className="footer-link-item"><a href="#" className="footer-link">About</a></li>
              <li className="footer-link-item"><a href="#" className="footer-link">Courses</a></li>
              <li className="footer-link-item"><a href="#" className="footer-link">ACCA Resources</a></li>
              <li className="footer-link-item"><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Education Street, Learning City</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@accaeducation.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} ACCA Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;