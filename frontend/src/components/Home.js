import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <h1>HOME IS WORKING</h1>
            <Link to={`/movies`}>
                <div>
                    <h3>Check the movies!</h3>
                </div>
            </Link>
        </div>
    );
}

export default Home;