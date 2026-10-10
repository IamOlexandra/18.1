import Item from "./Item";
import { useContext } from "react";
import videoContext from "../context/video_context";

export default function List({openModal}) {
  return (
    <ul style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
    }}>
        {useContext(videoContext).map((_, id) => (
            <Item categoryId={id} key={id} openModal={() => openModal(id)}/>
        ))}
    </ul>
  );
}