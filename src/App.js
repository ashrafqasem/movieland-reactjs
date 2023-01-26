// import React, {useEffect} from 'react';
// import './App.css';

// //https://www.omdbapi.com/apikey.aspx
// //Here is your key: 50e913ba

// //http://www.omdbapi.com?apikey=50e913ba
// //OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=50e913ba
// const apiKey = '50e913ba';
// const iKey = 'tt3896198';
// //const API_URL_ALL = `http://www.omdbapi.com/?i=${iKey}&apikey=${apiKey}`;
// const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`;

// function App() {

//     const searchMovies = async (title) => {
//         //http://www.omdbapi.com?apikey=50e913ba&s=patman
//         const API_URL_BY_TITLE = `${API_URL}&s=${title}`;

//         console.log(API_URL);
//         console.log(API_URL_BY_TITLE);

//         const response = await fetch(API_URL_BY_TITLE);
//         const data = await response.json();

//         console.log(data);
//         console.log(data.Search);
//     };

//     useEffect(() => {
//         searchMovies('Spiderman');
//     }, []); // [] if only want to call it at the start

//     return (
//         <h1>App</h1>
//     );
// }

// export default App;



import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

