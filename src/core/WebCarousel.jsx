import React from "react";
import { Carousel } from "react-bootstrap";
import web from "./web.json";
import { useNavigate } from "react-router-dom";

function WebCarousel() {
  const navigate = useNavigate();
  return (
    <div style={{padding: " 12vh 5vw 0px 5vw "}}>
      <Carousel
        fade
        controls={false}
        onSelect={(item) => {
          // console.log(item);
          if (item == 0) {
            return navigate("/video");
          }
        }}
      >
        {web.map((item) => (
          <Carousel.Item key={item} interval={10000}>
            <iframe
              style={{ height: "80vh", width: "100vw", overflow: "hidden" }}
              src={item}
              // allow='autoplay; encrypted-media'
              // allowFullScreen
              // title='video'
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default WebCarousel;
