import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {addToDb} from '../../utils/fakedb'
import './JobsDetails.css'

const JobsDetails = () => {

    const params = useParams();
    console.log(params.jobId);

    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const jobData = data.find(job => job.id === parseInt(params.jobId));
                setJob(jobData);
            })
    }, [])

    const handleApply = (id) => {
        addToDb(id);
      };
    return (
        <div className='container mt-5 mx-auto'>
            <h3 className='fw-bold text-center'>Job Details</h3>
            <div className='d-md-flex mt-5 justify-content-evenly'>
                <div className='text-start me-5'>
                    <p className='mt-5'><span className='fw-bold'>Job description: </span>{job.job_description}</p>
                    <p><span className='fw-bold'>Job responsibility: </span>{job.job_responsibility}</p>
                    <h6 className='fw-bold'>Educational Requirements:</h6>
                    <p>{job.educational_requirements}</p>
                    <h6 className='fw-bold'>Experience:</h6>
                    <p>{job.experiences}</p>
                </div>

                <div className='job-details p-5 ms-5'>
                    <h6 className='fw-bold'>Job Details</h6>
                    <p><span className='fw-semibold'>Salary:</span>{job.salary}</p>
                    <p><span className='fw-semibold'>Job title:</span>{job.job_title}</p>
                    <h6 className='fw-bold'>Contact information</h6>
                    <p><span className='fw-semibold'>Phone:</span>{job.phone}</p>
                    <p><span className='fw-semibold'>Email:</span>{job.email}</p>
                    <p><span className='fw-semibold'>Address:</span>{job.location}</p>
                    <button className='btn btn-info text-white fw-semibold' onClick={() =>handleApply(job.id)}>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobsDetails;