import React, { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

function AddMovie(props) {
    const [newMovie, setNewMovie] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted", newMovie)
        axios.post("http://localhost:5000/addmovie", newMovie).then((res) => {
            console.log(res)
        })
}
    const handleChange = (e) => {
        let movie = {...newMovie};
        movie[e.target.name] = e.target.value
        setNewMovie(movie)
}

    return (
        <div className="container">
             <h1>Add a Movie</h1>
             <form onSubmit={handleSubmit}>
                 <ul class="flex-outer">
                     <li><label htmlFor="title">Title:</label> <input onChange={handleChange} type="text" placeholder="eg. Reefer Madness" name="title" id="title" /></li>
                     <li><label htmlFor="director">Director:</label> <input onChange={handleChange} type="text" placeholder="eg. Louis J. Gasnier" name="director" id="director" /></li>
                     <li><label htmlFor="stars">Stars:</label> <input onChange={handleChange} type="text" placeholder="eg. Dorothy Short" name="stars" id="stars" /></li>
                     <li><label htmlFor="description">Description:</label> <input onChange={handleChange} type="text" placeholder="eg. One of the worst movies made" name="description" id="description" /></li>
                     <li><label htmlFor="showtimes">Showtimes:</label> <input onChange={handleChange} type="text" placeholder="eg. 6:30" name="showtimes" id="showtimes" /></li>
                     <li><label htmlFor="image">Image URL:</label> <input onChange={handleChange} type="text" placeholder="eg. http://imgur.com/image" name="image" id="image" /></li>
                     <li><button>Submit</button></li>
                 </ul>
             </form>
             <Link to="/movies">Go back</Link>
        </div>
    );
}

export default AddMovie;