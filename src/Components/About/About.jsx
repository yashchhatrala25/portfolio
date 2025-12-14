import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img_1.png';

const About = () => {
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
    <div id="about" className="about">
      <div 
        ref={el => sectionRefs.current['title'] = el}
        className={`about-title ${isVisible['title'] ? 'animate-fade-in' : ''}`}
      >
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      
      <div className="about-sections">
        <div 
          ref={el => sectionRefs.current['left'] = el}
          className={`about-left ${isVisible['left'] ? 'animate-slide-left' : ''}`}
        >
          <img src={profile_img} alt="Profile Image" />
        </div>
        
        <div 
          ref={el => sectionRefs.current['right'] = el}
          className={`about-right ${isVisible['right'] ? 'animate-slide-right' : ''}`}
        >
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          
          <div className="about-skills">
            <div className={`about-skill ${isVisible['right'] ? 'animate-skill' : ''}`} style={{ animationDelay: '0s' }}>
              <p>HTML & CSS</p>
              <hr style={{ width: isVisible['right'] ? '50%' : '0%' }} />
            </div>
            <div className={`about-skill ${isVisible['right'] ? 'animate-skill' : ''}`} style={{ animationDelay: '0.1s' }}>
              <p>JavaScript</p>
              <hr style={{ width: isVisible['right'] ? '70%' : '0%' }} />
            </div>
            <div className={`about-skill ${isVisible['right'] ? 'animate-skill' : ''}`} style={{ animationDelay: '0.2s' }}>
              <p>Reactjs</p>
              <hr style={{ width: isVisible['right'] ? '60%' : '0%' }} />
            </div>
            <div className={`about-skill ${isVisible['right'] ? 'animate-skill' : ''}`} style={{ animationDelay: '0.3s' }}>
              <p>Nextjs</p>
              <hr style={{ width: isVisible['right'] ? '50%' : '0%' }} />
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={el => sectionRefs.current['achievements'] = el}
        className={`about-achievements ${isVisible['achievements'] ? 'animate-fade-up' : ''}`}
      >
        <div className="about-achievement" style={{ animationDelay: '0s' }}>
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement" style={{ animationDelay: '0.2s' }}>
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement" style={{ animationDelay: '0.4s' }}>
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;