import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div>
          <h1>
            Cinema
            <br />
            Ironhack
          </h1>
          <Link to="/movies" className="button">
            Check the movies!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
