import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
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
    <div id='services' className='services'>
      <div 
        ref={el => sectionRefs.current['title'] = el}
        className={`services-title ${isVisible['title'] ? 'animate-fade-in' : ''}`}
      >
        <h1>My Services</h1>
        <img src={theme_pattern} alt='Theme Pattern' />
      </div>
      
      <div 
        ref={el => sectionRefs.current['container'] = el}
        className={`services-container ${isVisible['container'] ? 'animate-container' : ''}`}
      >
        {Services_Data.map((service, index) => {
          return (
            <div 
              key={index} 
              className='services-format'
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3>{service.s_no}</h3> 
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className='services-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt='ArrowIcon' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;