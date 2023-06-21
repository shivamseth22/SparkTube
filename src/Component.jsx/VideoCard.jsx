import { Link } from "react-router-dom";
const VideoCard = ({ info }) => {
  return (
    
      <div className=" w-[331px]">
        <img
          src={info?.snippet?.thumbnails?.medium?.url}
          className="rounded-lg"
        />

        <ul className="">
          <li className="font-bold line-clamp-1 mt-2">{info?.snippet?.title}</li>
          <li>{info?.snippet?.channelTitle}</li>
          <li className="text-sm">
            {info?.statistics?.viewCount} <span className="text-lg">views</span>{" "}
          </li>
        </ul>
      </div>
   
  );
};

export default VideoCard;
