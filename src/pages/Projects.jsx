import React, { useState } from 'react';
import { FaCode, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Router link
import "../styles/projects.css";
import Projectİmg1 from "../assets/office-rental.jpg";
import Projectİmg2 from "../assets/eduskill.jpg";
import Projectİmg3 from "../assets/responsive-site.png";
import Projectİmg4 from "../assets/csharp-program.jpg";

// ProjectCard bileşeni
const ProjectCard = ({ id, githubUrl, image, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className="project-image" />

      {hovered && (
        <div className="icon-overlay">
          {/* Detay sayfasına yönlendirme */}
          <Link to={`/projects/${id}`} className="icon-btn" title="Details">
            <FaEye size={28} />
          </Link>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon-btn" title="GitHub">
              <FaCode size={28} />
            </a>
          )}
        </div>
      )}

      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

// Proje verileri
export const projectsData = [
  {
    id: 1,
    title: "Ofis Kiralama",
    description: "Modern bir ofis kiralama. Reactjs ve CSS3 ile geliştirilen kullanıcı dostu bir web sitesidir.",
    image: Projectİmg1,
    type: "web",
    githubUrl: "https://github.com/Burakbulut34/BurakOfis-Resonsive-Site"
  },
  {
    id: 2,
    title: "Eduskill",
    description: "Modern bir soru çözme.",
    image: Projectİmg2,
    type: "web",
    githubUrl: "https://github.com/example/foto"
  },
  {
    id: 3,
    title:"Servis Hizmet",
    description: "Reactjs ve CSS3 ile geliştirilen kullanıcı dostu bir sitedir.",
    image: Projectİmg3,
    type: "web",
    githubUrl: "https://github.com/Burakbulut34/Responsive-Modern-Site",
  },
  {
    id: 4,
    title: "Öğrenci Bilgileri",
    description: "C# ve Entity Framework ile geliştirilen masaüstü programıdır.",
    image: Projectİmg4,
    type: "desktop",
    githubUrl:"https://github.com"
  }
];

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = projectsData.filter(project => {
    if (selectedFilter === 'all') return true;
    return project.type === selectedFilter;
  });

  return (
    <div className="projects-container">
      <h1 className="page-title">Projelerim</h1>
      <div className="hr"></div>

      <nav className="filter-nav">
        <button
          className={`filter-button ${selectedFilter === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-button ${selectedFilter === 'web' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('web')}
        >
          Web
        </button>
        <button
          className={`filter-button ${selectedFilter === 'desktop' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('desktop')}
        >
          Desktop
        </button>
      </nav>

      <main className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            githubUrl={project.githubUrl}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </main>
    </div>
  );
};

export default ProjectsPage;
