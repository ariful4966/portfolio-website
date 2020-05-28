import React from 'react';
import blogData from '../../FakeData/BlogData';
import BlogItem from '../BlogItem/BlogItem';
import { useState } from 'react';
import { useEffect } from 'react';

const BlogAll = () => {

    const [blogAll, setBlogAll] = useState(blogData);
    // useEffect(() => {
    //     fetch('http://localhost:4200/blogs')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setBlogAll(data);
    //         })
    // }, [])
    return (
        <div className="pageMarsing">
            <div className="container">
                <div className="row">
                    {
                        blogAll.map(blog => <BlogItem key={blog.key} blog={blog}></BlogItem>)

                    }
                </div>
            </div>
        </div>


    );
};

export default BlogAll;