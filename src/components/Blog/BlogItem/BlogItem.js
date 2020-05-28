import React from 'react';

import './BlogItem.css';

const BlogItem = (props) => {
    const { name, img, about,url, } = props.blog;
    return (
        <div className="col-md-4">
            <div className="singleBog">
                <div className="blogPic img-thumbnail">
                    <img src={img} alt="Blog Immage"/>
                </div>
                <div className="blogDetail">
                    <h2>{name}</h2>
                    <p>{about}</p>
                    <a href={url} target="_blank">View More</a>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;