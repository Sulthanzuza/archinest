// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import { FloatingWhatsAppButton } from './pages/FloatingWhatsAppButton';

import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import Services from './pages/Services';
import Snowfall from 'react-snowfall';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
 
    <Router>
      <Snowfall
        color="#f3fcffff"
        snowflakeCount={200}  
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none', 
        }}
      />
      <ScrollToTop />
      <FloatingWhatsAppButton 
      phoneNumber="+919037813345"
       buttonText="Contact Us"
       />
      <Routes>
           
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<About />} />
          <Route path="what-we-offer" element={<Services />} />

          <Route path="projects" element={<Projects />} />
          <Route path="reach-us" element={<Contact />} />
          <Route path="/project/:title" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
