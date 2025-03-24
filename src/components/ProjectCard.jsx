import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;