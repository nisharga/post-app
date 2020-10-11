import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePost from '../SinglePost';
import './Comment.css'
import SingleComment from './SingleComment';

const Comment = () => {
    const {ID} = useParams();
    const [comment, setComment] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${ID}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])


    return (
        <div className="comment">
            <h3>Total Comment: {comment.length}</h3> 
            {
                comment.map(data => <SingleComment val={data}></SingleComment>)
            }
        </div>
    );
};

export default Comment;