import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
function VideoContainer() {
  const [videos, setVideos] = useState(null);

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap justify-evenly">
   
      {
        videos&&videos.map((video) => (
          <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video}  /></Link>
      ))}
      
    </div>
  );
}

export default VideoContainer;
