import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DataEntry from "./DataEntry";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false); // New state for navbar visibility

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedProjects = Array.from(portfolioData.projects);
    const [reorderedProject] = updatedProjects.splice(result.source.index, 1);
    updatedProjects.splice(result.destination.index, 0, reorderedProject);

    setPortfolioData({
      ...portfolioData,
      projects: updatedProjects,
    });
  };

  const handleFormSubmit = (data) => {
    setPortfolioData(data);
    setShowNavbar(true); // Show navbar after form submission
  };

  return (
    <div className="app">
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
      
      {!portfolioData ? (
        <DataEntry onSubmit={handleFormSubmit} />
      ) : (
        <>
          <Hero
            name={portfolioData.name}
            bio={portfolioData.bio}
            profilePic={portfolioData.profilePic}
          />
          <About
            profilePic={portfolioData.profilePic}
            skills={portfolioData.skills}
            description={portfolioData.description}
          />
          <DragDropContext onDragEnd={onDragEnd}>
            <Projects projects={portfolioData.projects} />
          </DragDropContext>
          <Contact />
          <Footer socialMedia={portfolioData.socialMedia} />
        </>
      )}
    </div>
  );
};

export default App;