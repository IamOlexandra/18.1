import { useEffect, useState } from "react";
import List from "./components/List";
import videoContext from "./context/video_context";
import Modal from "./components/Modal";

const API_KEY = "55483797-7bf23ed8b2a2ba9e2eb875cf6";
const BASE_URL = "https://pixabay.com/api/videos/";
const URL = `${BASE_URL}?key=${API_KEY}&order=latest&per_page=8`;
const CATEGORIES = ["nature", "science", "health", "religion", "industry", "computer", "food", "sports", "travel", "music"]

function App() {
  const [modal, setModal] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function getImagesByCategory(category) {
    fetch(URL + "&category=" + category)
      .then(resp => resp.json())
      .then(data => {
        const categoryVideos = [];
        data.hits.forEach(element => {
          const video = {
            thumbnail: element.videos.tiny.thumbnail,
            video: element.videos.medium.url,
            author: element.user,
          }
          categoryVideos.push(video);
        });
        setVideos(prev => [...prev, {name: category, categoryVideos: categoryVideos}]);
      })
      .catch(error => console.error(error));
  }
  useEffect(() => {
    if(isLoading) {
      return;
    } else {
      setIsLoading(true)
    }
    CATEGORIES.forEach(category => {
      getImagesByCategory(category);
    });
  }, []);
  
  function openModal(id) {
    setModal(id);
  }
  function closeModal() {
    setModal(null);
  }

  return (
    <div>
      <h1>Watch videos by categories:</h1>
      {videos && <videoContext.Provider value={videos}>
        <List openModal={openModal}/>
        {modal && <Modal categoryId={modal} closeModal={closeModal}/>}
      </videoContext.Provider>}
    </div>
  );
}

export default App;