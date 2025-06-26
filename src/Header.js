import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { IoFlower } from "react-icons/io5";
import { BsCalendar3RangeFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Scroll and Resize Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className="headerC"
      style={{
        backgroundColor: "navy",
        color: "white",
        fontWeight: "bold",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        padding: scrolled ? "10px 0" : "15px 0",
        boxShadow: scrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none"
      }}
    >
      <div className="header-container d-flex justify-content-between align-items-center px-4">
        {/* Logo */}
        <div className="logo-container d-flex align-items-center gap-2">
          <BsCalendar3RangeFill style={{ fontSize: windowWidth <= 576 ? "1.2rem" : "1.5rem" }} />
          <p className="m-0" style={{ fontSize: windowWidth <= 576 ? "1rem" : "1.2rem" }}>Company Name</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav d-none d-md-flex gap-4">
          <a className="nav-item text-white text-decoration-none" href="#acca">Home</a>
          <a className="nav-item text-white text-decoration-none" href="#why-choose-us">Why Choose Us</a>
          <a className="nav-item text-white text-decoration-none" href="#eligibility">Eligibility</a>
          <a className="nav-item text-white text-decoration-none" href="#learn">Learn</a>
          <a className="nav-item text-white text-decoration-none" href="#placement">Placement</a>
          <a className="nav-item text-white text-decoration-none" href="#kick-off">Start Journey</a>
          <a className="nav-item text-white text-decoration-none" href="#contact-us">Contact Us</a>
        </nav>

        {/* Actions */}
        <div className="header-actions d-flex align-items-center gap-3">
          <button type="button" className="h-button btn btn-light text-primary fw-bold">
            <IoFlower size={windowWidth <= 576 ? 16 : 20} className="me-1" />
            Logout
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="mobile-menu-toggle d-md-none btn btn-outline-light">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav d-flex flex-column align-items-center bg-light text-dark py-3">
          <a className="nav-item py-1 text-decoration-none" href="#acca" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a className="nav-item py-1 text-decoration-none" href="#why-choose-us" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
          <a className="nav-item py-1 text-decoration-none" href="#eligibility" onClick={() => setIsMenuOpen(false)}>Eligibility</a>
          <a className="nav-item py-1 text-decoration-none" href="#learn" onClick={() => setIsMenuOpen(false)}>Learn</a>
          <a className="nav-item py-1 text-decoration-none" href="#placement" onClick={() => setIsMenuOpen(false)}>Placement</a>
          <a className="nav-item py-1 text-decoration-none" href="#kick-off" onClick={() => setIsMenuOpen(false)}>Start Journey</a>
          <a className="nav-item py-1 text-decoration-none" href="#contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;
