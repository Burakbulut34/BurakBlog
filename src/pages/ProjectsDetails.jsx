import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <h2>Proje bulunamadı</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.description}</p>
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      <br />
      <Link to="/projects">← Projelere Dön</Link>
    </div>
  );
};

export default ProjectDetails;
