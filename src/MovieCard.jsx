import React from 'react';

// const _movie1_ = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
//   };

//function MovieCard (props) {
//const MovieCard = (props) => {
//const MovieCard = ( {props: { imdbID, Year, Poster, Title, Type } } ) => { //. {} Object destructure
const MovieCard = ( {props} ) => { //. {} Object destructure
    return (
        <div className="movie" >
            <div>
                <p>{props.Year}</p>
            </div>
            <div>
                <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/400'} alt={props.Title} />
            </div>
            <div>
                <span>{props.Type}</span>
                <h3>{props.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;


// import React from 'react';

// const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
//   return (
//     <div className="movie" key={imdbID}>
//       <div>
//         <p>{Year}</p>
//       </div>

//       <div>
//         <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
//       </div>

//       <div>
//         <span>{Type}</span>
//         <h3>{Title}</h3>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;