import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useVideoCard = () => {
  const [video, setVideo] = useState("shivam");

  async function getVideos(){
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json);
    console.log(json);
    console.log(video);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return video;
};

export default useVideoCard;
