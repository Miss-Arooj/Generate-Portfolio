import React, { useState } from "react";
import "./DataEntry.css";

const DataEntry = ({ onSubmit }) => {
  // State for main form fields
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePic: "",
    skills: "",
    interests: "",
    description: "",
    projects: [], // Array to store projects
    socialMedia: [], // Array to store social media links
  });

  // State for individual project fields
  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    githubLink: "",
  });

  // State for individual social media fields
  const [socialMedia, setSocialMedia] = useState({ name: "", url: "" });

  // Handle changes in the main form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle changes in the project fields
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  // Handle changes in the social media fields
  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setSocialMedia({ ...socialMedia, [name]: value });
  };

  // Add a project to the projects array
  const addProject = () => {
    if (project.title && project.githubLink) {
      const newProject = { ...project, id: Date.now() }; // Add a unique ID
      setFormData({
        ...formData,
        projects: [...formData.projects, newProject],
      });
      // Reset the project form
      setProject({
        title: "",
        description: "",
        image: "",
        githubLink: "",
      });
    } else {
      alert("Please fill in the project title and GitHub link.");
    }
  };

  // Add a social media link to the socialMedia array
  const addSocialMedia = () => {
    if (socialMedia.name && socialMedia.url) {
      setFormData({
        ...formData,
        socialMedia: [...formData.socialMedia, socialMedia],
      });
      // Reset the social media form
      setSocialMedia({ name: "", url: "" });
    } else {
      alert("Please fill in the platform name and URL.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields (Personal Information)
    if (
      !formData.name ||
      !formData.bio ||
      !formData.profilePic ||
      !formData.skills ||
      !formData.interests ||
      !formData.description
    ) {
      alert("Please fill in all required fields in the Personal Information section.");
      return;
    }

    // Submit the form data
    onSubmit(formData);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="data-entry-container">
      <h1>Create Your Portfolio</h1>
      <form onSubmit={handleSubmit} className="data-entry-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              placeholder="A short bio about yourself"
              value={formData.bio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Profile Picture URL</label>
            <input
              type="text"
              name="profilePic"
              placeholder="Enter a URL for your profile picture"
              value={formData.profilePic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Skills (comma separated)</label>
            <input
              type="text"
              name="skills"
              placeholder="e.g., React, JavaScript, CSS"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Interests</label>
            <input
              type="text"
              name="interests"
              placeholder="e.g., Web Development, AI, Design"
              value={formData.interests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>About Me</label>
            <textarea
              name="description"
              placeholder="Write a detailed description about yourself"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="form-section">
          <h2>Add Projects</h2>
          <div className="form-group">
            <label>Project Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter project title"
              value={project.title}
              onChange={handleProjectChange}
            />
          </div>
          <div className="form-group">
            <label>Project Description</label>
            <textarea
              name="description"
              placeholder="Describe your project"
              value={project.description}
              onChange={handleProjectChange}
            />
          </div>
          <div className="form-group">
            <label>Project Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Enter a URL for the project image"
              value={project.image}
              onChange={handleProjectChange}
            />
          </div>
          <div className="form-group">
            <label>GitHub Link</label>
            <input
              type="text"
              name="githubLink"
              placeholder="Enter the GitHub link"
              value={project.githubLink}
              onChange={handleProjectChange}
            />
          </div>
          <button type="button" onClick={addProject} className="add-button">
            Add Project
          </button>
        </div>

        {/* Social Media Links Section */}
        <div className="form-section">
          <h2>Add Social Media Links</h2>
          <div className="form-group">
            <label>Platform Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g., LinkedIn, GitHub"
              value={socialMedia.name}
              onChange={handleSocialMediaChange}
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input
              type="text"
              name="url"
              placeholder="Enter the URL"
              value={socialMedia.url}
              onChange={handleSocialMediaChange}
            />
          </div>
          <button type="button" onClick={addSocialMedia} className="add-button">
            Add Social Media
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Generate Portfolio
        </button>
      </form>
    </div>
  );
};

export default DataEntry;