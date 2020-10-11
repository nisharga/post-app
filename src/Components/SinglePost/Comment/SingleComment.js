import React from 'react';
import fakeData from './photo';
import './SingleComment.css'


const SingleComment = (props) => {
    const {name, email, body} = props.val;
    // const [Aimg, setAImage] = useState([])
    // useEffect(()=> {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(res => res.json())
    //     .then(data => setAImage(data))
    // }, [])


    return (
        <div className="singleComment">
            {/* <img src={}></img> */}
            <img src={`https://ath2.unileverservices.com/wp-content/uploads/sites/8/2018/01/Hairstyles-for-men-pompadour.jpg`}></img> 
            <h4>Name: <span>{name}</span></h4>
            <h4>Email: <span>{email}</span></h4>
            <h4>Comment: <span>{body}</span></h4>
        </div>
    );
};

export default SingleComment;