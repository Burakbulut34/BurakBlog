import React from 'react'
import BlogSection from './Blog';
import Tech from './Teus';
import "../styles/home.css"
import "../App.css";
import AboutMe from './AboutMe';
import Abilities from "./AbPu"
import ProjectsPage from './Projects';

const Home = () => {
  return (
    <>
    <div className='home-body'>
    <BlogSection/>
    <Tech/>
    <AboutMe/>
    <Abilities/>
    <ProjectsPage/>
    </div>
    </>
  )
}

export default Home;