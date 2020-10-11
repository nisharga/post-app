import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './SinglePost.css'
import Container from '@material-ui/core/Container';
import Comment from './Comment/Comment';


const SinglePost = () => {
    const {ID} = useParams();
    const history = useHistory();
    const [sPost, sSetPost] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
        .then(res => res.json())
        .then(data => sSetPost(data))
    }, [])
    return (
        <div>
            <Container maxWidth="lg" className="singlePost">
            <h3>Post No. {ID}</h3>
            <h2>{sPost.title}</h2>
            <p>{sPost.body}</p>
            <Comment></Comment>
            </Container>
        </div>
    );
};

export default SinglePost;