import React, { useState } from "react";

const Trail = (props) => {
  const { trail, removeTrail } = props;
  const { city, name, description, state } = trail;
  const [isFullText, setIsFullText] = useState(false);

  return (
    <article className="single-tour">
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">
            {city}, {state}
          </h4>
        </div>
        <p>
          {description != null
            ? isFullText
              ? description
              : `${description.substring(0, 100)}...`
            : ""}
          <button onClick={() => setIsFullText(!isFullText)}>
            {description != null && description.length > 100
              ? isFullText
                ? "Read Less"
                : "Read More"
              : ""}
          </button>
        </p>
        <button className="btn delete-btn" onClick={() => removeTrail(name)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Trail;
