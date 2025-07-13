import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Projects from "../pages/Projects";
import ProjectPage1 from "../pages/projects/ProjectPage1";
import ProjectPage2 from "../pages/projects/ProjectPage2";
import ProjectPage3 from "../pages/projects/ProjectPage3";
import ProjectPage4 from "../pages/projects/ProjectPage4";
import ProjectPage5 from "../pages/projects/ProjectPage5";

// import Testimonials from '../pages/Testimonials';
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
      { path: "projects", element: <Projects /> },
      { path: "/projects/1", element: <ProjectPage1 /> },
      { path: "/projects/2", element: <ProjectPage2 /> },
      { path: "/projects/3", element: <ProjectPage3 /> },
      { path: "/projects/4", element: <ProjectPage4 /> },
      { path: "/projects/5", element: <ProjectPage5 /> },
      // { path: 'testimonials', element: <Testimonials /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
