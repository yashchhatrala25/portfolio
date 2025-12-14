import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="footer">
      <div 
        ref={el => sectionRefs.current['top'] = el}
        className={`footer-top ${isVisible['top'] ? 'animate-fade-in' : ''}`}
      >
        <div className="footer-top-left">
          <div className="logo-section">
            <div className="logo-text">Yash</div>
          </div>
          <p>
            I am a frontend developer from, India with 3.5 years of experience
            in companies like RadixWeb, NexusLink and Sky9ITCraft.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      
      <hr className={isVisible['top'] ? 'animate-line' : ''} />
      
      <div 
        ref={el => sectionRefs.current['bottom'] = el}
        className={`footer-bottom ${isVisible['bottom'] ? 'animate-fade-up' : ''}`}
      >
        <p className="footer-bottom-left">
          © 2025 Yash Chhatrala. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;