import React from 'react';
import Slider from '../Slider/Slider';
import Project from '../Project/Project';
import Blog from '../Blog/Blog';

import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="projectArea">
                <div className="container">
                    <h2 className="sectionHeading">Project </h2>
                    <Project></Project>
                </div>
            </div>
            <div className="projectArea">
                <div className="container">
                    <h2 className="sectionHeading">Blog </h2>
                    <Blog></Blog>
                </div>
            </div>
        </div>
    );
};

export default Home;