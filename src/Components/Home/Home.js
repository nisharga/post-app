import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';  
import './Home.css'

import Container from '@material-ui/core/Container';
import Post from '../Post/Post'

const Home = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div>
            <Container maxWidth="lg">
                {
                    post.map(data => <Post val={data}></Post>)
                }
            
                <h2>Post is: {post.length}</h2>
            </Container>
        </div>
    );
};

export default Home;