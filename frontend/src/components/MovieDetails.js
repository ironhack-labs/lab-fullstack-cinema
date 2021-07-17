import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieDetails(props) {
  let [details, setDetails] = useState({});

  // useEffect( async() => {
  //     let res = await axios.get(`http://localhost:5000/movies/${props.match.params.dynamicId}`);
  //     console.log(res)
  //     setBeer(res)

  //     }, [props.match.params.id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movie/${props.match.params.dynamicId}`)
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      });
  }, [props.match.params.dynamicId]);

  const ShowMovie = () => {
    console.log(details?.title);

    const showStars = () => {
      return details.stars?.map((star) => {
        return <li>{star}</li>;
      });
    };

    const showTimes = () => {
      return details.showtimes?.map((time) => {
        return <li>{time} | </li>;
      });
    };

    return (
      <div className="movie">
        <div>
          <img src={details.image} />
        </div>
        <div className="movieInfo">
          <Link to="/movies"> Go back</Link>
          <h2>{details?.title}</h2>
          <h3>Director: {details?.director}</h3>
          <h4>Stars</h4>
          {showStars()}
          <p>{details.description}</p>
          <ul className="ul_top_hypers">{showTimes()}</ul>
        </div>
      </div>
    );
  };

  return <div>{ShowMovie()}</div>;
}

export default MovieDetails;
