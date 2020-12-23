import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextReview = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const randReview = () => {
    const randIndex = Math.floor(Math.random() * people.length);
    setIndex(randIndex);
  };
  return (
    <section className="review">
      <div className="img-container">
        <img
          src={people[index].image}
          alt={people[index].name}
          className="person-img"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h3 className="author">{people[index].name}</h3>
        <p className="job">{people[index].job}</p>
        <p className="info">{people[index].text}</p>
      </div>
      <div>
        <button className="prev-btn" type="button" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" type="button" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <footer>
        <button className="random-btn" type="button" onClick={randReview}>
          Surprise Me!
        </button>
      </footer>
    </section>
  );
};

export default Review;
