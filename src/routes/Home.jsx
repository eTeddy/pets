function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main>
      <h1>Inspired By</h1>
      <p>--------------------------------</p>
      <p>Brian Design<br />React Sidebar Navigation Menu<br />using React Router v6.4<br />Beginner Tutorial</p>
      <iframe width="280" height="auto" src="https://www.youtube.com/embed/zQBd3hNXJgI" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>--------------------------------</p>
      <p>PedroTech<br />React Router V6.4+ Tutorial<br />New Syntax, useLoaderData...</p>
      <iframe width="280" height="auto" src="https://www.youtube.com/embed/z0vaVoxMoSA" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>--------------------------------</p>
      <p>The Net Ninja<br />React Router in Depth</p>
      <iframe width="280" height="auto" src="https://www.youtube.com/embed/OMQ2QARHPo0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>--------------------------------</p>
      <h1>Powered By</h1>
      <p>
        HTML, CSS, JavaScript, JSX, 
        <br />
        APIs, Vite & React!
      </p>
      <p>--------------------------------</p>   
      <a href="https://eteddy.github.io/" target="_blank">My Portfolio</a>
      <p>--------------------------------</p>   
      <a href="https://www.worldflagcounter.com/details/iuP"><img src="https://www.worldflagcounter.com/iuP/" alt="Flag Counter" /></a>
      <div className="a">
        <p className="a_p">Minimalist 🧡 May 2023</p>   
      </div>  
    </main>
  )
}

export default Home;