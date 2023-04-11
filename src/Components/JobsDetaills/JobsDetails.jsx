import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobsDetails = () => {
    const job = useLoaderData();
    
    return (
        <div>
            <h3 className='fw-bold'>Job Details</h3>
            <p><span className='fw-bold'>Job description: </span>{job.job_description}</p>
            <p><span className='fw-bold'>Job responsibility: </span>{job.job_responsibility}</p>
            <h6>Educational Requirements:</h6>
            <p>{job.educational_requirements}</p>
            <h6>Experience:</h6>
            <p>{job.experiences}</p>
        </div>
    );
};

export default JobsDetails;