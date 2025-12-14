import { useState, useEffect } from "react";
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "work", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-main ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <div className="logo-section">
            <div className="logo-icon">Y</div>
            <div className="logo-text">Yash</div>
          </div>

          <ul className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="cta-button" onClick={() => window.location.href = '#contact'}>
            Connect Now
          </button>

          <div
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="toggle-bar"></div>
            <div className="toggle-bar"></div>
            <div className="toggle-bar"></div>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id} className="mobile-nav-item">
              <a
                href={`#${link.id}`}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mobile-cta"
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.location.href = '#contact';
          }}
        >
          Connect Now →
        </button>
      </div>
    </>
  );
};

export default Navbar;