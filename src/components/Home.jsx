import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Home Page</h1>
            <Link to="/users" className='background'>Go to Users Page</Link>
        </div>
    );
}

export default Home;
