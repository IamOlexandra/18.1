import { useContext, useRef } from "react";
import videoContext from "../context/video_context";

export default function Video({categoryId, videoId}) {
    const allVideos = useContext(videoContext);
    const video = allVideos[categoryId].categoryVideos[videoId];
    const videoRef = useRef();
    const play = () => videoRef.current.play();
    const pause = () => videoRef.current.pause();
    return (
        <div style={{
            marginBottom: "50px",
        }}>
            <p>By: {video.author}</p>
            <video width="600" ref={videoRef}>
                <source src={video.video} type="video/mp4"/>
            </video>
            <button onClick={play}>play</button>
            <button onClick={pause}>pause</button>
        </div>
    );
}