import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Movies(props) {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:5000/movies`).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

const ShowMovies = () => movies.map(movie => <li>{movie.title}</li>)

  return (
    <div>
      <h1>MOVIES!</h1>
      <Link to="/">
        <div>
          <h3>Back to home</h3>
        </div>
      </Link>
      <ShowMovies />
    </div>
  );
}

export default Movies;
