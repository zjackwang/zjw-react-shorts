import React, { useState, useEffect } from "react";

import Jobs from "./Jobs";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [curJob, setCurJob] = useState("");

  const fetchJobs = async () => {
    const resp = await fetch(url);
    const retJobs = await resp.json();
    setJobs(retJobs);
    setLoading(false);
    if (retJobs.length > 0) {
      setCurJob(retJobs[0].company);
    }
    console.log(retJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const changeJob = (newJob) => {
    setCurJob(newJob);
  };

  console.log(curJob);
  return (
    <main>
      <div className="section">
        <div className="title">
          <h3>Experience</h3>
          <div className="underline"></div>
        </div>
      </div>
      <div className="jobs-center">
        {loading ? (
          <h3 className="loading">Loading Jobs...</h3>
        ) : (
          <Jobs jobs={jobs} curJob={curJob} changeJob={changeJob} />
        )}
      </div>
    </main>
  );
}

export default App;
