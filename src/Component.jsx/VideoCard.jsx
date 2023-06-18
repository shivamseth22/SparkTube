import React from 'react';
import useVideoCard from '../utils/useVideoCard';



const  VideoCard = ()=> {
  const videoCardData = useVideoCard();
console.log(videoCardData?.id);

   
  return (
    <div>
        {/* <h1>{videoCardData.snippet.categoryId}</h1>  */}
        {/* <img src={snippet.thumbnails.high.url}/>   */}
        {/*<ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul> */}
    </div>

  )
}

export default VideoCard
