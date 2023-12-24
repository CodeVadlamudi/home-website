import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PagesPage from "../pages/PagesPage";
import ServicesPage from "../pages/ServicesPage";
import ProjectsPage from "../pages/ProjectsPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/page" element={<PagesPage />} />
      <Route path="/service" element={<ServicesPage />} />
      <Route path="/project" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/project" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
