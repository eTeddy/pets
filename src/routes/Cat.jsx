import { useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";

export default function Cat() {
  const [catUrl, setCatUrl] = useState(
    useLoaderData() 
    ? useLoaderData()
    : "/cat/cute"
  );

  const navigation = useNavigation();

  const handleNewCatClick = async () => {
    const res = await fetch("https://cataas.com/cat?json=true");
    const cat = await res.json();
    setCatUrl(cat.url);
  };

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <button onClick={handleNewCatClick}>Click 😺 Me</button>      
      <img src={`https://cataas.com${catUrl}`} alt="Cat" />     
      <a className="a" href="https://cataas.com/" target="_blank">CATAAS</a>
    </main>    
  );
};

export const dataLoader = async () => {
  const res = await fetch("https://cataas.com/cat?json=true");
  const cat = await res.json();

  return cat.url;
};

/*
export default function Cat() {
  return (
    <div className="cat">
      😺
    </div>
  )
}
*/