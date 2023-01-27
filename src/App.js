import React, { useEffect, useState } from 'react'; //'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

import axios from 'axios';

const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
};

function App() {

  const [movies, setMovies] = useState([
      // {
      //   "Title": "Italian Spiderman",
      //   "Year": "2007",
      //   "imdbID": "tt2705436",
      //   "Type": "movie",
      //   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
      // },
      // {
      //   "Title": "Italian Spiderman",
      //   "Year": "2007",
      //   "imdbID": "tt2705436_",
      //   "Type": "movie",
      //   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
      // },
  ]);

  const [users, setUsers] = useState([]); //. [] => initial value is empty array 

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    //https://www.omdbapi.com/apikey.aspx
    const apiKey = '50e913ba'; //Here is your key: 50e913ba
    const iKey = 'tt3896198';
    const API_URL_MOVIES_ALL = `http://www.omdbapi.com/?i=${iKey}&apikey=${apiKey}`; //.x //OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=50e913ba
    const API_URL_MOVIES = `http://www.omdbapi.com?apikey=${apiKey}`; //http://www.omdbapi.com?apikey=50e913ba

    const API_URL_MOVIES_BY_TITLE = `${API_URL_MOVIES}&s=${title}`;  console.log(API_URL_MOVIES_BY_TITLE); //http://www.omdbapi.com?apikey=50e913ba&s=patman
    const fetchData = await fetch(API_URL_MOVIES_BY_TITLE); console.log(fetchData);
    const jsonMData = await fetchData.json(); console.log(jsonMData);  console.log(jsonMData.Search);

    setMovies(jsonMData.Search);
  };

  async function getUsers() {
    try {
      const API_URL_RANDOM_USER = 'https://randomuser.me/api'; 
      //const fetchUsers = await fetch(API_URL_RANDOM_USER); //console.log(fetchUsers);
      //const jsonUsers = await fetchUsers.json();  console.log(jsonUsers);

      const getData = await axios.get(API_URL_RANDOM_USER).then(response => {
        const strJson = JSON.stringify(response);
        //console.log(response); console.log(response.data.results); //console.log(strJson); 
        setUsers(response.data.results)

        return response.data.results; //. nn
      });
      //const jsonData = await getData.json(); console.log(jsonData); //. x
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchMovies('Batman');
    //getUsers(); //. test
  }, []); // [] if only want to call it at the start

  return (
    <div className="app">
      <h1>Movie Land</h1>

      {users.map((user) => (
        <h1 key={user.id.value} >{user.name.first}</h1>
      ))}
      {/* <pre style={{color: 'yellow' }}>{ JSON.stringify(users, null, 2)}</pre> */}

      <div className="search">
        {/* <input placeholder="Search for movies" value="Superman" onChange={(title) => {setSearchTerm(title)}} /> */}
        <input placeholder="Search for movies" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />

        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm) } />
      </div>
      
      <div className="container" >

        {/* <div className="movie" >
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={ movie1.Poster !== 'N/A' ?  movie1.Poster : 'https://via.placeholder.com/400' } alt={movie1.Title} />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div> */}

        {/* <MovieCard Year={movie1.Year} Poster={movie1.Poster} Type={movie1.Type} Title={movie1.Title} /> */}
        {/* <MovieCard props={movies[0] } /> */}

        {
          movies?.length > 0 
            ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard props={movie} key={movie.imdbID} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2 style={{color: "yellow"}}>No movies found</h2>
              </div>
            )
        }

      </div>
    </div>
  );
}

export default App;



// import React, { useState, useEffect } from "react";

// import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
// import "./App.css";

// const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     searchMovies("Batman");
//   }, []);

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>

//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//         />
//         <img
//           src={SearchIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

