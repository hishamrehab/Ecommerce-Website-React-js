import React from 'react'
import { useState } from 'react'
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();

    const result = blog.filter((b) => b.id === Number(id));
    console.log(result);

    return (
        <div>SingleBlog</div>
    )
}

export default SingleBlog