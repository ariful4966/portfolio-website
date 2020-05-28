import React, { useState } from 'react';
import projectData from '../FakeData/ProjectData';
import ProjectItem from './ProjectItem/ProjectItem';
import { useEffect } from 'react';

const Project = () => {
    const project03 = projectData.slice(0, 3);
    const [project, setProject] = useState(project03);
    // useEffect(() => {
    //     fetch('http://localhost:4200/projects')
    //         .then(res => res.json())
    //         .then(data => setProject(data))
    // }, []);
    return (
        <div className="container">
            <div className="row">
                {
                    project.map(pro => <ProjectItem pro={pro}></ProjectItem>)
                }

            </div>
        </div>
    );
};

export default Project;