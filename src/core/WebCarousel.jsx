import React from "react";
import { Carousel } from "react-bootstrap";
import web from "./web.json";
import { useNavigate } from "react-router-dom";

function WebCarousel() {
  const navigate = useNavigate();
  return (
    <Carousel
      fade
      controls={false}
      onSelect={(item) => {
        // console.log(item);
        if (item == 0) {
           return navigate("/");
        }
      }}
    >
      {web.map((item) => (
        <Carousel.Item key={item} interval={10000}>
          <iframe
            style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
            src={item}
            // allow='autoplay; encrypted-media'
            // allowFullScreen
            // title='video'
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default WebCarousel;
