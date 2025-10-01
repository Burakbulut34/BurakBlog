import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "./Projects";
import "../styles/projectsDetails.css";
import { RiGithubLine } from "react-icons/ri";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
   console.log("Project details:", project); // 🔎 buraya ekle

  if (!project) {
    return <h2 className="not-found">Proje bulunamadı</h2>;
  }

  return (
    <div className="project-details">
      {/* Başlık */}
      <h1 className="project-title">{project.title}</h1>

      {/* Resim */}
      <div className="image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>

      {/* Açıklama */}
      <p className="project-description">{project.description}</p>

      {/* Linkler */}
      <div className="project-links">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            <RiGithubLine size={20} /> GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            🌐 Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
