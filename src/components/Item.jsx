import { useContext } from "react";
import videoContext from "../context/video_context";

export default function Item({categoryId, openModal}) {
    const allVideos = useContext(videoContext);
    const category = allVideos[categoryId];
    return (
        <li style={{
            position: "relative",
            width: "200px",
            overflow: "hidden",
            cursor: "pointer",
        }} onClick={openModal}>
            <h2 style={{position: "absolute", top: "20px", textAlign: "center", color: "#fff"}}>{category.name}</h2>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
            }}>
                <div style={{width: "50%", height: "40px", overflow: "hidden"}}><img style={{width: "100%"}} src={category.categoryVideos[0].thumbnail} alt=""/></div>
                <div style={{width: "50%", height: "40px", overflow: "hidden"}}><img style={{width: "100%"}} src={category.categoryVideos[1].thumbnail} alt=""/></div>
                <div style={{width: "50%", height: "40px", overflow: "hidden"}}><img style={{width: "100%"}} src={category.categoryVideos[2].thumbnail} alt=""/></div>
                <div style={{width: "50%", height: "40px", overflow: "hidden"}}><img style={{width: "100%"}} src={category.categoryVideos[3].thumbnail} alt=""/></div>
            </div>
        </li>
    );
}