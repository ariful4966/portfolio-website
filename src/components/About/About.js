import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="aboutArea pageMarsing">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">

                        <article>
                            <div className="sectionHeading">
                                <h2>Md Ariful Islam</h2>
                                <h4>Web Developer</h4>
                            </div>
                            <p>A technically savvy web developer, who has multiple years of website design expertise behind her. Ariful Islam can be a strong driving force for improving the performance, scalability and reliability of development projects. He has a long track record of creating dynamic, rich and interesting web portals and of providing long term solutions to front-end problems. He is currently looking for a suitable position with a responsible employer who will assist in the development of his career & skills.</p>
                        </article>
                        <article>
                            <div className="sectionHeading">
                                <h4>Skill</h4>
                            </div>
                            <p>
                                Expertise: React.js, JavaScript, ES6, Fortran Material-UI, SPA, Bootstrap-4, HTML5, CSS3</p>
                            <p>Comfortable: Redux.js, Node.js, Express.js, MongoDB, JSON</p>
                            <p>Familiar: React-Native.js PHP, WordPress, jQuery Plugin, MYSQL</p>
                            <p>Tools: GIT, Sublime-text 3, Brackets, Visual-Studio Code, Netlify, HiroKu, Firebase, Chrome Dev Tool. </p>
                            <a href="https://drive.google.com/file/d/1LD3Ndp_0T2s0wy3Il-gZMUc2LwDLN5CB/view?usp=sharing" target="_blank" className="downloadBTN">Download CV</a>
                        </article>
                    </div>
                    <div className="col-md-5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;