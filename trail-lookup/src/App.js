import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Trails from "./Trails";
import { key } from "./Key";

// const url =
// "https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&q-state_cont=texas&q-country_cont=united%20states";
function App() {
  const [loading, setLoading] = useState(true);
  const [trails, setTrails] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchTrails = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        "https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&q-state_cont=texas&q-country_cont=united%20states",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": { key },
            "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
          },
        }
      );
      if (resp.status >= 200 && resp.status <= 299) {
        const trailJSON = await resp.json();
        const { places } = trailJSON;
        setLoading(false);
        setTrails(places.filter((place) => place.country == "United States"));
      } else {
        console.log(resp.status);
        setIsError(true);
        setTrails([]);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const removeTrail = (name) => {
    let updatedTrails = trails.filter((trail) => trail.name != name);
    setTrails(updatedTrails);
  };

  useEffect(() => {
    fetchTrails();
  }, []);

  if (trails.length == 0) {
    return (
      <section>
        <div className="title">
          <h2>No Trails!</h2>
          <button className="btn" onClick={() => fetchTrails()}>
            Get Trails
          </button>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <main className="container">
        <Loading />
      </main>
    );
  } else {
    console.log(trails);
    return (
      <main className="container">
        <Trails trails={trails} removeTrail={removeTrail} />
      </main>
    );
  }
}

export default App;
