import React from 'react';
import blogData from '../FakeData/BlogData';

// import projects from '../FakeData/ProjectData.js';


const PostServer = () => {
    const handleAdd = ()=>{
        // const project = projects;
        const blog = blogData;
        console.log('before Post', blog);
        fetch('http://localhost:4200/addProject/', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json; charset=UTF-8"}
            })
         .then(res => res.json())
         .then(data =>{
             console.log('post Successful', data);
         })
        
    }
    return (
        <div>
            <h2>This is FakeData Post On Server</h2>
            <button onClick={handleAdd}>Data Submit</button>
        </div>
    );
};

export default PostServer;