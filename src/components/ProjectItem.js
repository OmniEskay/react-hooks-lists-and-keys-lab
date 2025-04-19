import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              margin: '2px 5px 2px 0',
              padding: '2px 5px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              fontSize: '0.9em'
             }}
          >
            {tech} 
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;