import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects';
import "../styles/projectsDetails.css";
import { RiGithubLine } from "react-icons/ri";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));
  console.log(project);

  if (!project) {
    return <h2>Proje bulunamadı</h2>;
  }

  return (
    <div className="project-details">
      {/* Başlık */}
      <h1 className="project-title">{project.title}</h1>

      {/* Resim */}
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      {/* Açıklama */}
      <p className="project-description">{project.description}</p>

      {/* Butonlar */}
      <div className="project-links">
        {project.githubUrl && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <RiGithubLine /> GitHub
  </a>
)}
{project.liveDemoUrl && (
  <a
    href={project.liveDemoUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    🌐 Live Demo
  </a>
)}

      </div>
    </div>
  );
};

export default ProjectDetails;
