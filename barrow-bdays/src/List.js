import React from "react";

const List = (props) => {
  const { people } = props;
  return (
    <>
      {people.map((person) => {
        const { id, name, bday, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} className="person-img" />
            <div>
              <h4>{name}</h4>
              <p>{bday}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
