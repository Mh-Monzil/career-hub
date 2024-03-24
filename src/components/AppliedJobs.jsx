import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "./localStorage";
import { useEffect, useState } from "react";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [totalAppliedJobs, setTotalAppliedJobs] = useState([]);
  console.log(jobs);

  useEffect(() => {
    const appliedJobs = getStoredJobApplication();
    if (appliedJobs.length > 0) {
      const jobsApplied = jobs.filter((job) => appliedJobs.includes(job.id));
      console.log(jobsApplied);
      setTotalAppliedJobs(jobsApplied);
    }
  }, []);

  return (
    <div>
        <h2 className="text-3xl font-semibold text-center">Applied Jobs</h2>
        <div className="space-y-5 my-10">
          {
            totalAppliedJobs.map(job => <AppliedJobList key={job.id} job={job}></AppliedJobList>)
          }
        </div>
    </div>
  )
};

export default AppliedJobs;
