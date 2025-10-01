import React from 'react'
import BlogSection from './Blog';
import Tech from './Teus';
import "../styles/home.css"
import "../App.css";
import AboutMe from './AboutMe';
import Abilities from "./AbPu"
import ProjectsPage from './Projects';
import MyExpreience from "./MyExpe";
import Contact from './Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <div className='home-body'>
    <BlogSection/>
    <Tech/>
    <AboutMe/>
    <Abilities/>
    <ProjectsPage/>
    <MyExpreience/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default Home;