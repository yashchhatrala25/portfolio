import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
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

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "40f680e3-3367-4ae6-bdb2-25de18a8fe61");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data) {
      alert("Email sent successfully!!");
    }
  };

  return (
    <div id="contact" className="contact">
      <div 
        ref={el => sectionRefs.current['title'] = el}
        className={`contact-title ${isVisible['title'] ? 'animate-fade-in' : ''}`}
      >
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="contact-section">
        <div 
          ref={el => sectionRefs.current['left'] = el}
          className={`contact-left ${isVisible['left'] ? 'animate-slide-left' : ''}`}
        >
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail" style={{ animationDelay: '0s' }}>
              <img src={mail_icon} alt="Email Icon" />
              <p>yashkansara0425@gmail.com</p>
            </div>
            <div className="contact-detail" style={{ animationDelay: '0.1s' }}>
              <img src={call_icon} alt="Call Icon" />
              <p>+91-8905908070</p>
            </div>
            <div className="contact-detail" style={{ animationDelay: '0.2s' }}>
              <img src={location_icon} alt="Location Icon" />
              <p>Morbi, Gujarat, India</p>
            </div>
          </div>
        </div>

        <form 
          ref={el => sectionRefs.current['right'] = el}
          onSubmit={onSubmit} 
          className={`contact-right ${isVisible['right'] ? 'animate-slide-right' : ''}`}
        >
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" id="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" id="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" id="message" rows={8} placeholder="Enter your message" required />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;