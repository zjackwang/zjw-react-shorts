import React from "react";

const TodayBirthday = (props) => {
  const { people, today } = props;
  let dayMonth = today.getMonth() + 1 + "-" + today.getDate();
  let bdayPeople = people.filter((person) => person.date == dayMonth);
  console.log(dayMonth, bdayPeople);
  if (bdayPeople.length > 0) {
    return (
      <>
        <section className="container">
          <h2>Whose Bday is it?</h2>
          {bdayPeople.map((person) => {
            const { id, name, bday, image } = person;
            let year = bday.split(", ")[1];
            let age = Number(today.getFullYear()) - Number(year);
            return (
              <div key={id} className="person">
                <img src={image} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <p>Congrats on turning {age}. You're old af</p>
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  } else {
    return (
      <section className="container">
        <h2>Nobody has a Bday today. Boo !</h2>
      </section>
    );
  }
};

export default TodayBirthday;
