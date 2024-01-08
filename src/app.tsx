import React from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div>
      <Navbar name="Andrew" page1="Projects" page2="Contact" />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}
