import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Tips from "../pages/Tips";
const index = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Tips />} />
      </Routes>
    </HashRouter>
  );
};

export default index;
