import React from 'react';
import slider01 from '../../images/admin.png';
import slider02 from '../../images/node.png';
import slider03 from '../../images/Tools.png';

import './Slider.css';

const Slider = () => {
    return (
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators singSlidIcon">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <div className="sliderInfo">
                                    <h4>Hi!, I am</h4>
                                    <h1>Md <span>Ariful</span> Islam</h1>
                                    <p>I'm full stack web developer. I am design any type of website like as Personal, Woo-commerce, Schools, Bussiness and many others. Spacilly I am a web developer. I develop the website with R HTML, CSS, JavaScript, React, Node.js etc. Mostly for my development I use github platform. If you design or develop your website you can call me..</p>
                                    
                                </div>
                             </div>
                            <div className="col-md-6">
                                <div className="sliderImg">
                                    <img src={slider01}  alt="Admin Images"/>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <div className="sliderInfo">
                                    <h4>Using Web Development Language</h4>
                                    <h1>React Web Developer</h1>
                                    <p><span>Expertise:</span> React.js, JavaScript, ES6, Fortran Material-UI, SPA, Bootstrap-4, HTML5, CSS3</p>
                                    <p><span>Comfortable:</span> Redux.js, Node.js, Express.js, MongoDB, JSON</p>
                                    <p><span>Familiar:</span> React-Native.js PHP, WordPress, jQuery Plugin, MYSQL</p>
                                    
                                </div>
                             </div>
                            <div className="col-md-6">
                                <div className="sliderImg">
                                    <img src={slider02}  alt="Admin Images"/>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 ">
                                <div className="sliderInfo">
                                    <h4>Using for Development</h4>
                                    <h1>Web Design<span>Tools</span></h1>
                                    <p>GIT, Sublime-text 3, Brackets, Visual-Studio Code, Netlify, HiroKu, Firebase, Chrome Dev Tool</p>
                                    
                                </div>
                             </div>
                            <div className="col-md-6">
                                <div className="sliderImg">
                                    <img src={slider03}  alt="Admin Images"/>
                                </div>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Slider;