import { useState } from "react";
import videos from "./videos.json";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const VideoCarousel = () => {
  const [vid, setVid] = useState(0);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "12vh 10vw 0px 10vw" }}>
      <div>
        <ReactPlayer
          
          url={videos[vid]}
          // pip={true}
          controls={true}
          playing={true}
          width="80vw"
          height="80vh"
          onEnded={() => {
            let x = vid + 1;
            let y = x > videos.length - 1 ? 0 : x;
            setVid(y);
            // console.log(x);
            if (x > videos.length - 1) {
              return navigate("/");
            }
          }}
        />
      </div>
    </div>
  );
};

export default VideoCarousel;
