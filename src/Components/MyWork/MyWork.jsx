import React, { useEffect, useRef, useState } from 'react';
import "./MyWork.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
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
    <div id='work' className='mywork'>
      <div 
        ref={el => sectionRefs.current['title'] = el}
        className={`mywork-title ${isVisible['title'] ? 'animate-fade-in' : ''}`}
      >
        <h1>My latest work</h1>
        <img src={theme_pattern} alt='Theme Pattern' />
      </div>

      <div 
        ref={el => sectionRefs.current['container'] = el}
        className={`mywork-container ${isVisible['container'] ? 'animate-container' : ''}`}
      >
        {mywork_data.map((work, index) => {
          return (
            <img 
              key={index} 
              src={work.w_img} 
              alt='Work Image'
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          );
        })}
      </div>

      <div 
        ref={el => sectionRefs.current['showmore'] = el}
        className={`mywork-showmore ${isVisible['showmore'] ? 'animate-fade-up' : ''}`}
      >
        <p>Show More</p>
        <img src={arrow_icon} alt='Read More' />
      </div>
    </div>
  );
};

export default MyWork;