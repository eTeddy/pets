import { 
  useLoaderData, 
  useNavigation,
} from "react-router-dom"
import { useEffect, useState } from "react";

export default function Dog() {
  const [ dogUrl, setDogUrl ] = useState(useLoaderData());
  const navigation = useNavigation();

  const handleNewDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await res.json();
    setDogUrl(dog.message);
  };

  useEffect(() => {
    handleNewDog();
  }, []);
    
  if ( navigation.state === "loading") { return <h1>Loading...</h1> }
  
  return (
    <main>
      <button onClick={handleNewDog}>Click 🐶 Me</button> 
      <img src={dogUrl} alt="dog"/>  
      <div className="a">
        <a href="https://dog.ceo/" target="_blank">DOG CEO</a>
      </div>       
    </main>
  ) 
}

export const dataLoader = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await res.json();

  return dog.message;
}


/*

export default function Dog() {
  return (
    <div className="dog">
      🐶
    </div>
  )
}
*/