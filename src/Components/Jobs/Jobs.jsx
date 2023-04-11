import React from 'react';
import './Jobs.css'
import { Link } from 'react-router-dom';

const Jobs = ({ job }) => {
    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = job;
    return (
        <div className='jobs-box'>
            <img src={company_logo} alt="" />
            <h5 className='fs-5'>{job_title}</h5>
            <p>{company_name}</p>
            <div className='d-flex mx-auto align-items-center justify-content-center'>
                <p className='btn btn-outline-info me-2'>{remote_or_onsite}</p>
                <p className='btn btn-outline-info'>{fulltime_or_parttime}</p>
            </div>
            <p>Location:{location}</p>
            <p>Salary:{salary}</p>
            <button className='btn btn-info'> <Link to={`/job/${id}`}>View Details</Link> </button>
        </div>
    );
};

export default Jobs;