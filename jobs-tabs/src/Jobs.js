import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Jobs = (props) => {
  const { jobs, curJob, changeJob } = props;
  const job = jobs.filter((j) => j.company === curJob)[0];
  console.log(job);
  return (
    <>
      <div className="btn-container">
        {jobs.map((job) =>
          job.company === curJob ? (
            <button
              key={job.id}
              className="job-btn active-btn"
              type="button"
              name={job.company}
            >
              {job.company}
            </button>
          ) : (
            <button
              key={job.id}
              className="job-btn"
              type="button"
              name={job.company}
              onClick={() => changeJob(job.company)}
            >
              {job.company}
            </button>
          )
        )}
      </div>
      <div className="job-info">
        <h3>{job && job.title}</h3>
        <h4>{job && job.company}</h4>
        <p className="job-date">{job && job.dates}</p>
        {job &&
          job.duties.map((duty) => (
            <p className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              {duty}
            </p>
          ))}
        <button className="btn" type="button">
          More Info
        </button>
      </div>
    </>
  );
};

export default Jobs;
