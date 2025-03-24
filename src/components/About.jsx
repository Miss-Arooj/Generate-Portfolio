import React, { useEffect, useRef } from "react";
import "./About.css"; // Import the CSS file for styling

const About = ({ profilePic, skills, description }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Store the current value of aboutRef in a variable
    const currentRef = aboutRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("underline");
          } else {
            entry.target.classList.remove("underline");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the variable in the cleanup function
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section id="about" className="about">
      <h2 ref={aboutRef} className="about-heading">
        About
      </h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="about-text">
          <p>{description}</p>
          <h3>Skills</h3>
          <div className="skills-list">
            {skills.split(",").map((skill, index) => (
              <div key={index} className="skill-box">
                {skill.trim()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;