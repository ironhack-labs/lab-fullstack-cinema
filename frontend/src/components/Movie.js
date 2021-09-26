import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Movie = () => {
  let history = useHistory();
  let { id } = useParams();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    stars: [],
    image: "",
    description: "",
    showtimes: [],
  });
  useEffect(() => {
    axios.get(`http://localhost:5000/api/movie/${id}`).then((res) => {
      setMovie(res.data);
    });
  }, []);
  return (
    <div className="movie">
      <div className="movie-details">
        <div className="image-section">
          <div className="single-movie-image">
            <img src={movie.image} />
          </div>
        </div>
        <div className="details-section">
          <button onClick={() => history.goBack()} className="back-button">
            Go back
          </button>
          <h2 className="single-movie-title">{movie.title}</h2>
          <h3 className="single-movie-director">Director: {movie.director}</h3>
          <h4 className="single-movie-stars-header">Stars</h4>
          <ul className="single-movie-stars">
            {movie.stars.map((star) => {
              return <li key={star}>{star}</li>;
            })}
          </ul>
          <p className="single-movie-details">{movie.description}</p>
          <p className="single-movie-times">
            {movie.showtimes.map((showtime) => {
              return <span key={showtime}>{showtime} | </span>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
