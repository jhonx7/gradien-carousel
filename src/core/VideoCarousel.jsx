import { useState } from "react";
import videos from "./videos.json";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const VideoCarousel = () => {
  const [vid,setVid] = useState(0);
  const navigate = useNavigate();

  return (
    <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url={videos[vid]}
      // pip={true}
      // controls={true}
      playing={true}
      width='100%'
      height='100%'
      onEnded={()=>{
        let x = vid + 1;
        let y = x > (videos.length-1) ? 0 : x;
        setVid(y)
        // console.log(x);
        if (x > (videos.length-1)) {
          return navigate("/web");
      }
      }}
    />
    </div>
  );
};

export default VideoCarousel;