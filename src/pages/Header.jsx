import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/img/logo.png";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" width="90px" height="80px"></img>
                <span className="site-name">Good Music.</span>
            </Link>
            <span className="interact">
                <Link to="/cart" className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="40"><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" /></svg>
                </Link>
                <a href="/" className="link">Log in</a>
            </span>
        </header>
    );
};

export default Header;