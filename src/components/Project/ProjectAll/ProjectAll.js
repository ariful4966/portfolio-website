import React, { useState } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import projectData from '../../FakeData/ProjectData';

import './ProjectAll.css';
import { useEffect } from 'react';

const ProjectAll = () => {
    const [projects, setProjects] = useState(projectData);
    // useEffect(() => {
    //     fetch('http://localhost:4200/projects')
    //         .then(res => res.json())
    //         .then(data => setProjects(data));
    // }, [])

    return (
        <div className="pageMarsing">
            <div className="container">
                <div className="row">
                    {
                        projects.map(pro => <ProjectItem pro={pro}></ProjectItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ProjectAll;