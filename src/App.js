import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Quality from "./Pages/Quality";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="skill" element={<Skill />} />
        <Route path="quality" element={<Quality />} />
        <Route path="service" element={<Service />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="footer" element={<Footer />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
