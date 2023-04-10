import React from 'react';
import './Jobs.css'

const Jobs = ({job}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary} = job;
    return (
        <div className='jobs-box'>
            <img src={company_logo} alt="" />
            <h6>{job_title}</h6>
            <p>{company_name}</p>
            <p>{remote_or_onsite}</p>
            <p>{fulltime_or_parttime}</p>
            <p>Location:{location}</p>
            <p>Salary:{salary}</p>

        </div>
    );
};

export default Jobs;