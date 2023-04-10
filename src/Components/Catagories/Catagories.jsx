import React from 'react';
import './Catagories.css'

const Catagories = ({catagory}) => {
    const {title, jobs_available, logo} = catagory;
    return (
        <div className='catagory-box'>
            <img src={logo} alt="" />
            <h5>{title}</h5>
            <p>{jobs_available}</p>
        </div>
    );
};

export default Catagories;