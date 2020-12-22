import React from "react";
import Trail from "./Trail";

const Trails = (props) => {
  const { trails, removeTrail } = props;
  return (
    <section>
      <div className="title">
        <h2>Trails in the US</h2>
        <div className="underline"></div>
      </div>
      <div>
        {trails.map((trail) => {
          return (
            <Trail key={trail.name} trail={trail} removeTrail={removeTrail} />
          );
        })}
      </div>
    </section>
  );
};

export default Trails;
