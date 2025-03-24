import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = ({ projects, onDragEnd }) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      document.getElementById("projects-heading").classList.add("highlight");
    } else {
      document.getElementById("projects-heading").classList.remove("highlight");
    }
  }, [inView]);

  return (
    <section id="projects" className="projects" ref={ref}>
      <h2 id="projects-heading">Projects</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div
              className="project-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {projects.map((project, index) => (
                <Draggable
                  key={project.id}
                  draggableId={project.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        githubLink={project.githubLink}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default Projects;