import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../components/PageHeader';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Single Job Page"} path={"single job"} />
      <div className='my-8'>
        <h2 className='text-4xl font-bold mb-4'>{job.jobTitle}</h2>
        <p className='text-gray-600 mb-2'><strong>Company:</strong> {job.companyName}</p>
        <p className='text-gray-600 mb-2'><strong>Location:</strong> {job.location}</p>
        <p className='text-gray-600 mb-2'><strong>Job Type:</strong> {job.jobType}</p>
        <div className='my-4'>
          <h3 className='text-2xl font-semibold mb-2'>Job Description:</h3>
          <p className='text-gray-700'>{job.description}</p>
        </div>
        <button className='bg-blue px-8 py-2 text-white rounded hover:bg-blue-700 transition-all' onClick={handleApply}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
