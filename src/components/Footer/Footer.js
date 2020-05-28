import React, { useState } from 'react';
import projectData from '../FakeData/ProjectData';
import blogData from '../FakeData/BlogData';

import './Footer.css';
import { useEffect } from 'react';

const Footer = () => {
    const project5 = projectData.slice(0, 5);
    const blog5 = blogData.slice(0, 5);
    const [projects, setProjects] = useState(project5);
    const [blogs, setBlog] = useState(blog5);

    // useEffect(() => {
    //     fetch('http://localhost:4200/blogs')
    //         .then(res => res.json())
    //         .then(data => {
    //             // const data3 = data.slice(0, 3);
    //             setBlog(data);
    //         })
    // }, []);
    // useEffect(() => {
    //     fetch('http://localhost:4200/projects')
    //         .then(res => res.json())
    //         .then(data => {
    //             // const projects3 = data.slice(0, 3);
    //             setProjects(data);
    //         })
    // }, []);
    return (
        <div className="footerArea headerBg">
            <div className="container">
                <div className="footerTop">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footerHeading">
                                <h4>Projects</h4>
                            </div>
                            <ul>
                                {
                                    projects.map(project => <li>{project.name}</li>)
                                }
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footerHeading">
                                <h4>Blog</h4>
                            </div>
                            <ul>
                                {
                                    blogs.map(blog => <li>{blog.name}</li>)
                                }
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footerHeading">
                                <h4>Social Media</h4>
                            </div>
                            <ul className="socialMedia">
                                <li><a href="#"><i className="fa fa-facebook" title="Facebook"></i> </a></li>
                                <li><a href="#"><i className="fa fa-linkedin" title="LinkedIn"></i> </a></li>
                                <li><a href="#"><i className="fa fa-twitter" title="Twitter"></i> </a></li>
                                <li><a href="#"><i className="fa fa-github" title="GitHub"></i> </a></li>
                                <li><a href="#"><i className="fa fa-google-plus" title="Google"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footerButton">
                    <p>&copy; All Right Reserved || Ariful Islam</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;