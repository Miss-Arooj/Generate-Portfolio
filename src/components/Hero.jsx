import React from "react";
import "./Hero.css"; // Import the CSS file for styling

const Hero = ({ name, bio, profilePic }) => {
  const handleClick = () => {
    // Scroll to the Projects section
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I am {name}</h1>
          <p>{bio}</p>
          <button onClick={handleClick} className="view-work-button">
            View My Work
          </button>
        </div>
        {profilePic && (
          <div className="hero-image">
            <img src={profilePic} alt={name} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;