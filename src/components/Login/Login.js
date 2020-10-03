import React from 'react';
import './Login.css';
import logo from '../../logos/logo.png';

const Login = () => {
    return (

        <div className="container volunteer-login">
            <a href="/home"><img src={logo} alt="" className="form-logo" /></a>

            <form action="" className="login-form bg-white">
                <div className="form-element">
                    <h3>Login with</h3>

                    <button type="submit" className="btn btn-outline-success col-md-12 ">Continue With Google</button>
                    <p>Don't have an account? <a href="#">create an account.</a></p>
                </div>
            </form>

        </div>

    );
};

export default Login;