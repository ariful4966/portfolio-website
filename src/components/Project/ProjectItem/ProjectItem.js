import React from 'react';
import './ProjectItem.css';


const ProjectItem = (props) => {
    const { name, about, img, url } = props.pro
    return (
        <div className="col-md-4 ">
            <div className="singleProject">
                <div className="projectPic img-thumbnail">
                    <img src={img} alt="" />
                </div>
                <div className="projectDetail">
                    <h3>{name}</h3>
                    <p>{about}</p>
                    <a href={url} target="_blank">View Website</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;