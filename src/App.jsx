import ReactPlayer from "react-player";
import videos from "./core/videos.json";
import { useState } from "react";
import VideoCarousel from "./core/VideoCarousel";
import WebCarousel from "./core/WebCarousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/web" element={<WebCarousel />} />
        <Route path="/" element={<VideoCarousel />} />
      </Routes>
    </Router>
  );
}

export default App;
