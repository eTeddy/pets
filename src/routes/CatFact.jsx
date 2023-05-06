import { useEffect, useState } from 'react';

export default function CatFact() {
  const [fact, setFact] = useState('');
  const [cat, setCat] = useState('🐈‍⬛');

  const handleCat = () => {
    setCat(cat === '🐈‍⬛' ? '🐈' : '🐈‍⬛');
  }

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  }, []);

  const getNewFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  };

  return (
    <main>

      <button 
        onClick={getNewFact} 
        onMouseEnter={handleCat} 
        onMouseLeave={handleCat}>
          Click <span role="img" aria-label="cat">{cat}</span> Me
      </button> 
      <h1 className='h1'>Did you know?</h1>                   
      <div className="cat_fact">{fact}</div>         
      <div className="a">
        <a href="https://catfact.ninja/" target="_blank">Cat Facts</a>
      </div> 
    </main>
  )
}