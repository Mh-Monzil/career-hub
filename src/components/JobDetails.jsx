import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    console.log(job);
    return (
        <div>
            JobDetails : {id}
        </div>
    );
};

export default JobDetails;