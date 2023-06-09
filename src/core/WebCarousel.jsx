import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// import web from "./web.json";
import { useNavigate } from "react-router-dom";

function WebCarousel() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchJson = () => {
    fetch("./web.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);
  return (
    <div style={{ padding: " 12vh 5vw 0px 5vw " }}>
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
        {data?.map((item) => (
          <Carousel.Item key={item.web} interval={item.duration}>
            <iframe
              style={{ height: "80vh", width: "90vw", overflow: "hidden" }}
              src={item.web}
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
