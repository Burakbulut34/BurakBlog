  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import './App.css';
  import Header from "./components/Header/Header";
  import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ProjectDetails from "./pages/ProjectsDetails";



  function App() {
    return (
      
    <>
      <Router>
        <Header/>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
    );
  }

  export default App;
