import React, { useState } from 'react';
import fakeData from './photo';
import SingleComment from './SingleComment';

const Img = () => {
    const [data, setData] = useState(fakeData);
    return (
        <div>
            {
                fakeData.map(data => <SingleComment photo={data}></SingleComment>)
            }
        </div>
    );
};

export default Img;