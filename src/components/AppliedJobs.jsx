import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "./localStorage";
import { useEffect, useState } from "react";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [totalAppliedJobs, setTotalAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const appliedJobs = getStoredJobApplication();
    if (appliedJobs.length > 0) {
      const jobsApplied = jobs.filter((job) => appliedJobs.includes(job.id));
      console.log(jobsApplied);
      setTotalAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, []);

  const handleFilter = (filter) => {
    if(filter === "all"){
      setDisplayJobs(totalAppliedJobs);
    }
    else if(filter === "remote"){
      const remoteJobs = totalAppliedJobs.filter(job => job.remote_or_onsite === "Remote");
      setDisplayJobs(remoteJobs)
    }
    else if(filter === "onsite"){
      const onsiteJobs = totalAppliedJobs.filter(job => job.remote_or_onsite === "Onsite");
      setDisplayJobs(onsiteJobs)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Applied Jobs</h2>
      <div className="w-full flex justify-end">
        <details className="dropdown">
          <summary className="m-1 btn bg-purple-500 text-white">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="space-y-5 my-10">
        {displayJobs.map((job) => (
          <AppliedJobList key={job.id} job={job}></AppliedJobList>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
