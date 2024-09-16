import React from 'react';

function ProjectCard({ title, description, techStack, githubLink, liveDemo }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {techStack.join(', ')}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View Code</a> | 
      <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
}

export default ProjectCard;
