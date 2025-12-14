import { useState, useEffect } from "react";
import './Hero.css'
import profile_image from '../../assets/profile_img.png'
import resume from '../../assets/YASH_CHHATRALA_WEB DEVELOPER.pdf'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div id="home" className="hero">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>

        <div className="hero-content">
          <div className="profile-container">
            <img 
              src={profile_image}
              alt="Profile" 
              className="profile-image"
            />
          </div>

          <h1 className="hero-title">
            <span className="highlight">I'm Yash Chhatrala</span>, frontend developer based in India.
          </h1>

          <p className="hero-description">
            I am a frontend developer from Gujarat, India with 3 years of experience
            in multiple companies like RadixWeb, NexusLink, Sky9 ITCraft.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Connect with me
            </a>
            <a href={resume} className="btn btn-secondary" download="Yash_Resume">
              My resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;