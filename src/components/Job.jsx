import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card w-full mx-auto bg-white shadow-lg border border-teal-300">
      <div className="card-body space-y-2">
        <img className="w-28" src={logo} alt="" />
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-3">
          <button className="btn bg-white border border-purple-500 text-purple-600 text-base">
            {remote_or_onsite}
          </button>
          <button className="btn bg-white border border-purple-500 text-purple-600 text-base">
            {job_type}
          </button>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-xl" />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineDollar />
            <p>Salary:{salary}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn bg-gradient-to-r from-purple-400 to-purple-600 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
