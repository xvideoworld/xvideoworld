const API_KEY = "YOUR_TMDB_KEY";

async function loadMovies(){
const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
const data = await res.json();

const container = document.getElementById("content");

container.innerHTML = "";

data.results.forEach(item=>{
  const div = document.createElement("div");
  div.className="card";
  div.innerHTML=`
    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" width="100%">
    <h4>${item.title || item.name}</h4>
    <a href="player.html?id=${item.id}">Watch</a>
  `;
  container.appendChild(div);
});
}

loadMovies();
