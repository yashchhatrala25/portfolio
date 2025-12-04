import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Picture" />
      <h1>
        <span>I'm Yash Chhatrala</span>, frontend developer based in India.
      </h1>
      <p>
        I am frontend developer from Gujarat, India with 3 years of experience
        in multiple companies like RadixWeb, NexusLink, Sky9 ITCraft.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
