import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { getJobCart } from '../../utils/fakedb';
import NoData from '../NoData/NoData';


export const JobDataContext = createContext([]);

const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState([]);
    const [isFilter, setFilter] = useState([]);
    const [jobs, setJobs] = useState([]);
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])

    // get all job data using context api
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const allJobs = useContext(JobDataContext);
    let jobCart = [];
    // get storedJobs dat from local storage
    const storedJob = getJobCart();
    // filter out the applied jobs from allJobs
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        for (const id in storedJob) {
            const appliedJob = allJobs?.find((job) => job.id === parseInt(id));
            jobCart.push(appliedJob);
        }
        setAppliedJob(jobCart);
        setFilter(jobCart);
    }, []);

    <JobDataContext.Provider value={jobs}></JobDataContext.Provider>

    // check the applied jobs data is or not

    const handleFilter = (event) => {
        const value = event.target.value;
        if (value === "Remote") {
            const remoteJobs = appliedJob.filter((job) => job.remote_or_onsite === "Remote");
            setFilter(remoteJobs);
        } else if (value === "Onside") {
            const remoteJobs = appliedJob.filter((job) => job.remote_or_onsite === "Onsite");
            setFilter(remoteJobs);
        } else if (value === "All") {
            setFilter(appliedJob);
        }
    };
    if (appliedJob.length <= 0) {
        return <NoData></NoData>;
    }


    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-end mt-5 ms-5">
                    <select
                        className="bg-gray-200 p-2 rounded-md outline-none border-none"
                        onChange={handleFilter}>
                        <option disabled>Select Job Type</option>
                        <option>All</option>
                        <option>Onside</option>
                        <option>Remote</option>
                    </select>
                </div>
                <div className="p-2">
                    {isFilter.map((job) => (
                        <div
                            key={job?.id}
                            className=" p-3 d-flex g-4 my-5 align-items-center rounded">
                            <div className="p-2 d-flex align-items-center justify-content-center rounded bg-light">
                                <img className="" src={job?.company_logo} alt="" />
                            </div>
                            <div className="">
                                <h1 className="fs-5 fw-semibold text-black">
                                    {job?.job_title}
                                </h1>
                                <h1 className="fs-5 fw-semibold text-black">
                                    {job?.company_name}
                                </h1>
                                <button className="btn btn-outline">{job?.remote_or_onsite}</button>{" "}
                                <button className="btn btn-outline">{job?.fulltime_or_parttime}</button>
                                <h1 className="fs-5 fw-semibold text-black">
                                    {job?.location}
                                </h1>
                            </div>
                            <div className="ml-auto">
                                <Link to={`/details/${job?.id}`}>
                                    <button className="btn btn-info text-white fw-bold">View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;