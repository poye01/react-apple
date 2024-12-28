import React, { useEffect, useState } from "react";
function Youtube() {
  const [youtubevideos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&key=AIzaSyDLWf463lid-5HYmcZsU-OhO8rwvR8J8BY"
    )
      .then((response) => response.json())
      .then((data) => {
        const youtubevideosData = data.items;
        setVideo(youtubevideosData)
      });
  }, []); 
  return (
    <div className="allVideoWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">
              <br />
              <h1>Latest Video</h1>
              <br />
            </div>
          </div>
          {youtubevideos.map((singleVideo) => {
            let vidID = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidID}`;
            let VideoWrapper = (
              <div key={vidID} className="col-sm-12 col-md-5 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            // let allVideoWrapper = (
            //   <div key={i} className="col-sm-12 col-md-6 col-lg-4"></div>
            // );
            return VideoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}
export default Youtube;
