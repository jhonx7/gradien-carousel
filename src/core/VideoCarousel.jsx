import { useState, useEffect } from "react";
// import videos from "./videos.json";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const VideoCarousel = () => {
  const [vid, setVid] = useState(0);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchJson = () => {
    fetch("./videos.json")
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
    <div style={{ padding: "12vh 10vw 0px 10vw" }}>
      <div>
        <ReactPlayer
          url={data[vid]}
          // pip={true}
          controls={true}
          playing={true}
          width="80vw"
          height="80vh"
          onEnded={() => {
            let x = vid + 1;
            let y = x > data.length - 1 ? 0 : x;
            setVid(y);
            // console.log(x);
            if (x > data.length - 1) {
              return navigate("/");
            }
          }}
        />
      </div>
    </div>
  );
};

export default VideoCarousel;
