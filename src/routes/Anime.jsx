import { useState } from "react";

export default function Anime() {

  const [animeData, setAnimeData] = useState({
    
    imgUrl: "https://cdn.catboys.com/images/image_103.jpg",
    name: "Anime Name",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetAnime = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.catboys.com/img");
      const data = await response.json();
      setIsLoading(false);
      setAnimeData({ imgUrl: data.url, name: data.artist });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("An error happened, please try again");
    }
  };

  return (
    <main>

      <button onClick={handleGetAnime} disabled={isLoading}>
        {isLoading ? "Loading..." : "Click 👱‍♀️ Me"}
      </button>      

      <h3>Name: <span id="anime_name">{error || animeData.name}</span></h3>

      <img src={animeData.imgUrl} alt={animeData.name} />
  
      <div className="a">
        <a href="https://catboys.com/api" target="_blank">Catboys</a>
      </div> 

    </main>

  );
};





/*
import { useState } from "react";

export const Anime = () => {

  const [animeData, setAnimeData] = useState({
    
    imgUrl: "https://cdn.catboys.com/images/image_103.jpg",
    name: "Anime Name",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetAnime = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.catboys.com/img");
      const data = await response.json();
      setIsLoading(false);
      setAnimeData({ imgUrl: data.url, name: data.artist });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("An error happened, please try again");
    }
  };

  return (
    <div id="anime_container">

      <button id="anime_btn" onClick={handleGetAnime} disabled={isLoading}>
        {isLoading ? "Loading..." : "Click 👱‍♀️ Me"}
      </button>      

      <h3>Name: <span id="anime_name">{error || animeData.name}</span></h3>

      <div id="anime_img_container">
        <img id="anime_img" src={animeData.imgUrl} alt={animeData.name} />
      </div>      

    </div>
  );
};
*/