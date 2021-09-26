import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then((res) => {
      setMovies(res.data);
    });
  }, []);
  return (
    <div className="movies">
      <h1 className="movies-title">Ironhack Cinema</h1>
      <p className="movies-text">Click on the movie to check the showtimes!</p>
      <div className="movies-list">
        {movies.map((movie) => {
          return (
            <div key={movie._id} className="movie-container">
              <div className="movie-image">
                <img src={movie.image} />
              </div>
              <h3 className="movie-title">{movie.title}</h3>
              <div className="see-more">
                <Link to={`/movie/${movie._id}`} className="see-more-link">
                  See more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
