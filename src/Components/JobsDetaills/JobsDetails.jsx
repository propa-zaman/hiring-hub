import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobsDetails = () => {

    const params = useParams();
    console.log(params.jobId);

    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
            .then(data => {
                const jobData = data.find(job => job.id === params.jobId);
                console.log(jobData);
            })
        }, [])
    return (
        <div className='container text-center mt-5 mx-auto'>
            <h3 className='fw-bold'>Job Details</h3>
            <p className='mt-5'><span className='fw-bold'>Job description: </span>{job.job_description}</p>
            <p><span className='fw-bold'>Job responsibility: </span>{job.job_responsibility}</p>
            <h6>Educational Requirements:</h6>
            <p>{job.educational_requirements}</p>
            <h6>Experience:</h6>
            <p>{job.experiences}</p>
        </div>
    );
};

export default JobsDetails;