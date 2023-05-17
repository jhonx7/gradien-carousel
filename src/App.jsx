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
        <Route path="/video" element={<VideoCarousel />} />
        <Route path="/" element={<WebCarousel />} />
      </Routes>
    </Router>
  );
}

export default App;
