import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Movies(props) {
  let [movies, setMovies] = useState([]);

   useEffect(
   // async function () {
  //   let res = await axios.get(`https://localhost:5000/movies`);
  //   // console.log(res.data)
  //   setMovies(res.data);
  // }
    () => {
    axios.get(`http://localhost:5000/movies`).then((res) => {
      //console.log(res.data);
      setMovies(res.data);
    });
  }, []
  );


  const ShowMovies = () =>{
  
    return movies.map((movie) => {
      return (
      <div className="movieCard">
        <img src={movie.image} />
        <h4>{movie.title}</h4>
        <Link to={`/movie/${movie._id}`} >See more</Link>
      </div>)
  })};

  return (
    <div>
      <div className="header">
        <h1 >Ironhack Cinema</h1>
        <h4 >Click on the movie to check the showtimes!</h4>
        <Link to="/" >
          <div>
            <h3>Back to home</h3>
          </div>
        </Link>
        <Link to="/movies/new" >
          <div>
            <h3>Add a Movie</h3>
          </div>
        </Link>
      </div>
      <div className="movies">{ShowMovies()}</div>
    </div>
  );
}

export default Movies;
