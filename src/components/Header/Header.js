import React from 'react';
import './Header.css';

const Header = () => {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}

                <a class="navbar-brand" href="/home">
                    <img src={logo} alt="" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                            {/* <a class="nav-link" href="/home">Home</a> */}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/dentalService">Dental Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Review</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;