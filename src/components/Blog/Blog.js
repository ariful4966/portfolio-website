import React, { useState } from 'react';
import blogData from '../FakeData/BlogData';
import BlogItem from './BlogItem/BlogItem';
import { useEffect } from 'react';

const Blog = () => {
    const blog3 = blogData.slice(0,3);

    const [blog, setBlog] = useState(blog3);
    // const Blog = blog.slice(0, 3);
    // useEffect(() => {
    //     fetch('http://localhost:4200/blogs')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //             setBlog(data);
    //         })
    // }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    blog.map(blog => <BlogItem key={blog.key} blog={blog}></BlogItem>)
                }
            </div>
        </div>

    );
};

export default Blog;