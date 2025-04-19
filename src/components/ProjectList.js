import React from "react";
import ProjectItem from "./ProjectItem"; 

function ProjectList({ projects }) {
  console.log(projects); 
  const projectItems = Array.isArray(projects)
    ? projects.map((project) => (
        <ProjectItem
          key={project.id} 
          name={project.name} 
          about={project.description || ""}
          technologies={project.technologies || []}
        />
      ))
    : null; 

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectItems}
        {!projectItems && <p>No projects to display.</p>}
        {projectItems && projectItems.length === 0 && <p>No projects to display.</p>}
      </div>
    </div>
  );
}

export default ProjectList;