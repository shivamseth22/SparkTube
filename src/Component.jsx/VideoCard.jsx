import React from "react";
import useVideoCard from "../utils/useVideoCard";

const VideoCard = () => {
  const videoCardData = useVideoCard();
  console.log(videoCardData);

  return (
    <div className="flex flex-wrap m-2 gap-5 ">
      {videoCardData &&
        videoCardData?.map((videoItem) => (
          <div className="flex flex-col flex-wrap w-72 shadow-lg ">
            <img src={videoItem?.snippet?.thumbnails?.medium?.url} className="rounded-lg"/>
            {/* <h1>{videoItem?.snippet?.categoryId}</h1> */}
            <ul>
              <li className="font-bold py-2">{videoItem?.snippet?.title}</li>
              <li>{videoItem?.snippet?.channelTitle}</li>
              <li>{videoItem?.statistics?.viewCount} views </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default VideoCard;
