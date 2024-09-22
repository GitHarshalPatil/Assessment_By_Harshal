import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <Link to="/users">Go to Users Page</Link>
        </div>
    );
}

export default Home;
