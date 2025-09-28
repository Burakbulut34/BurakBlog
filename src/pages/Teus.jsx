import "../styles/teus.css";
import React, { useState, useEffect, useRef } from "react";
import { FaDatabase, FaReact } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import SiCSharpLogo from "../components/React-Icon/Csharp";
import {
  SiDotnet,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiCloudinary,
  SiJavascript,
  SiNextdotjs,
  SiGoogleanalytics,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

const techStack = [
  { id: 1, icon: SiDotnet, label: ".NET", color: "#5C2D91" },          // .NET mor
  { id: 2, icon: FaDatabase, label: "SQL", color: "#00758F" },         // SQL mavi
  { id: 3, icon: FaReact, label: "React", color: "#61DBFB" },          // React mavi
  { id: 4, icon: SiTypescript, label: "TypeScript", color: "#3178C6" },// TypeScript mavi
  { id: 5, icon: SiNextdotjs, label: "Next.js", color: "#000000" },    // Next.js siyah
  { id: 6, icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },// JavaScript sarı
  { id: 7, icon: SiHtml5, label: "HTML", color: "#E34F26" },           // HTML turuncu
  { id: 8, icon: SiCss3, label: "CSS3", color: "#264de4" },            // CSS mavi
  { id: 9, icon: SiBootstrap, label: "Bootstrap", color: "#7952B3" },  // Bootstrap mor
  { id: 10, icon: SiCloudinary, label: "Cloudinary", color: "#FF6C37" },// Cloudinary turuncu
  { id: 11, icon: SiGoogleanalytics, label: "Analytics", color: "#F29100" }, // Google Analytics turuncu
  { id: 12, icon: SiGithub, label: "Github", color: "white" },        // GitHub siyah
  { id: 13, icon: DiVisualstudio, label: "Visual Studio", color: "#5C2D91" }, // VS mor
  { id: 14, icon: VscVscode, label: "Visual Studio Code", color: "#007ACC" }, // VS Code mavi
  { id: 15, icon: SiFirebase, label: "Firebase", color: "#FFCA28" },    // Firebase sarı-turuncu
  { id: 16, icon: SiCSharpLogo, label: "C#", color: "#68217A" },        // C# mor
];


export default function TechSlider() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  const startX = useRef(0);
  const currentTranslate = useRef(0);

  // Otomatik kaydırma
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % techStack.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  // Current değiştiğinde kaydırmayı ayarla
  useEffect(() => {
    if (!isDragging) {
      const newTranslate = -current * (250 / techStack.length);
      setTranslateX(newTranslate);
      currentTranslate.current = newTranslate;
    }
  }, [current, isDragging]);

  // Fare ile sürükleme işlemleri
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX.current;
    setTranslateX(currentTranslate.current + (dx / window.innerWidth) * 100);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const index = Math.round(Math.abs(translateX) / (100 / techStack.length));
    const newTranslate = -index * (100 / techStack.length);
    setCurrent(index % techStack.length);
    currentTranslate.current = newTranslate;
    setTranslateX(newTranslate);
  };


  return (
    <div className="slider"
     onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      <div className="slider-container">
        <div
          className="slider-track"
          style={{
            display: "flex",
            transform: `translateX(${translateX}%)`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          {techStack.map((tech) => (
            <div key={tech.id} className="slider-item">
              <div className="slider-icon">
                {React.createElement(tech.icon, {
                  size: 50,
                  style: { color: tech.color || "#000" },
                })}
              </div>
              <p className="slider-label">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
