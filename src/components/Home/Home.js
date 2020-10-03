import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (

        <main>
            <Header></Header>
            <div className="container mt-5">
                <h1>This is the home page</h1>
            </div>

        </main>
    );
};

export default Home;