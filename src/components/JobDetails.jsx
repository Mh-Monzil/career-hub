import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "./localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId); 
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = job;
  console.log(job);

  const notify = () => toast("Application submitted successfully!");

  const handleApply = () => {
    saveJobApplication(intId);
    notify();
  }

  return (
    <div className="m-2">
    <ToastContainer />
      <h2 className="text-4xl text-center font-semibold py-6">Job Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 space-y-4">
        <div className="col-span-3">
            <p className="leading-8"><span className="font-bold">Job Description:</span> {job_description}</p>
            <p className="leading-8"><span className="font-bold">Job Responsibility:</span> {job_responsibility}</p>
            <p className="leading-8"><span className="font-bold">Education Requirements:</span> <br /> {educational_requirements}</p>
            <p className="leading-8"><span className="font-bold">Experiences: <br /> </span> {experiences}</p>
        </div>
        <div className="col-span-1">
            <div className="bg-purple-100 p-4 rounded-md">
                <h3 className="font-bold text-xl ">Job Details</h3>
                <div className="border-t border-gray-400 py-3 mt-3 space-y-1">
                    <p className="font-medium"><span className="font-bold">Salary:</span> {salary} (Per Month)</p>
                    <p className="font-medium"><span className="font-bold">Job Title:</span> {job_title}</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl" >Contact Information</h3>
                    <div className="border-t border-gray-400 py-3 mt-3 space-y-1">
                        <p className="font-medium"><span className="font-bold">Phone: </span>{contact_information.phone}</p>
                        <p className="font-medium"><span className="font-bold">Email: </span>{contact_information.email}</p>
                        <p className="font-medium"><span className="font-bold">Address: </span>{contact_information.address}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button onClick={handleApply} className="btn bg-gradient-to-r from-purple-400 to-purple-600 text-white w-full">Apply Now </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
