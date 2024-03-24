import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div>
      <div>
        <h2 className="text-4xl font-semibold text-center">Featured Jobs</h2>
        <p className="text-center">Explore featured jobs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {jobs.slice(0,dataLength).map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <button onClick={() => setDataLength(jobs.length)} className={`${dataLength === jobs.length && "hidden"} btn bg-gradient-to-r from-purple-400 to-purple-600 text-white`}>Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
