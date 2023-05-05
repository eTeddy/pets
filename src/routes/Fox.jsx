import { useState } from "react";

export default function Fox() {
	const [ num, setNum ] = useState(Math.floor(Math.random() * 123) + 1);
	const newnum = () => { setNum(Math.floor(Math.random() * 123) + 1) }
  
  return (
    <main>
      <button onClick={newnum}>Click 🦊 Me</button>					
			<img src={`https://randomfox.ca/images/${num}.jpg`} alt="fox" />        
      <div className="a">
        <a href="https://randomfox.ca/" target="_blank">Random Fox</a>
      </div>    
    </main>
  )
}