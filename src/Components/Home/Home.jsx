import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagories from '../Catagories/Catagories';
import Jobs from '../Jobs/Jobs';

const Home = () => { 
    const catagories = useLoaderData();
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            {/* Header section*/}
            <div className='container d-md-flex mx-auto' bg="light">
                <div>
                    <h2 className='fs-1 text mt-5 fw-bolder'>One Step <br /> Closer To Your <br /> <span className='text-info'>Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-info'>Get Started</button>
                </div>

                <div>
                    <img src="../../.././public/images/hardy copy.png" alt="" />
                </div>
            </div>
            {/* Job category section */}

            <div className='container text-center mt-5 mx-auto'>
                <h3 className='fw-bold'>Job Category List</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='d-md-flex mt-5'>
                {
                    catagories.map(catagory => <Catagories
                    key={catagory.id}
                    catagory={catagory}></Catagories>)
                }
                </div>
               
            </div>
            {/* featured job section */}

            <div className='container text-center mt-5 mx-auto'>
            <h3 className='fw-bold'>Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div>
                    {
                        jobs.map(job => <Jobs
                        key={job.id}
                        job={job}></Jobs>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Home;