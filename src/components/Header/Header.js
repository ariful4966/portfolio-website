import React from 'react';
import logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
    return (
        <div className="headerArea headerBg">
            <div className="container">
                <nav className="navbar navbar-expand-lg nav-padding">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Ariful Islam"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto site_menu">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/project">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;