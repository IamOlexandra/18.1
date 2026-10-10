import { useContext } from "react";
import videoContext from "../context/video_context";
import Video from "./Video";

export default function Modal({categoryId, closeModal}) {
    const allVideos = useContext(videoContext);
    const category = allVideos[categoryId];
    return (
        <div style={{
            position: "fixed",
            left: "0",
            top: "0",
            width: "100%",
            height: "100vh",
            backgroundColor: "#fff",
            overflow: "auto",
        }}>
            <button onClick={closeModal}>Go back</button>
            <h2>{category.name}</h2>
            <ul>{category.categoryVideos.map((_, id) => (
                <li key={id}>
                    <Video categoryId={categoryId} videoId={id}/>
                </li>
            ))}</ul>
        </div>
    );
}