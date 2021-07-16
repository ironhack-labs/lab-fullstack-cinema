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
      console.log(res.data);
      setMovies(res.data);
    });
  }, []
  );


  const ShowMovies = () =>{
  
    return movies.map((movie) => {
      return (
      <div className="test">
        <img src={movie.image} />
        <h4>{movie.title}</h4>
        <Link to={`/movies/${movie._id}`} >See more</Link>
      </div>)
  })};

  return (
    <div>
      <h1 className="title">Ironhack Cinema</h1>
      <h3 className="title">Click on the movie to check the showtimes!</h3>
      <Link to="/" className="title">
        <div>
          <h3>Back to home</h3>
        </div>
      </Link>
      <div className="movies">{ShowMovies()}</div>
    </div>
  );
}

export default Movies;
