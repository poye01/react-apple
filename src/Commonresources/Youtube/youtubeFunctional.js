import { useEffect, useState } from "react";

function youtubeFunctional() {
  const [youtubevideos, setyoutubevideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&key=AIzaSyDLWf463lid-5HYmcZsU-OhO8rwvR8J8BY".
      )
      .then((res=>res.json()))
      .then((data)=>{
        setyoutubevideos(data.items)
      })
  });
  return <div>youtubeFunctional</div>;
}

export default youtubeFunctional;
