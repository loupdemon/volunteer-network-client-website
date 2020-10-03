import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (

        <main>
            <Header></Header>
            <div className="container mt-5 text-center">
                <h1>I grow by helping people in need.</h1>

                {/* <nav class="navbar navbar-light bg-light"> */}
                <form class="form-inline d-flex justify-content-center mt-4">
                    <input class="form-control mr-sm-2 w-25" type="search" placeholder="Search..." aria-label="Search" />
                    <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
                {/* </nav> */}
            </div>

        </main>
    );
};

export default Home;