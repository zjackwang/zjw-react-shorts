import React, { useState } from "react";
import data from "./data";
import List from "./List";
import TodayBirthday from "./TodayBirthday";
function App() {
  const [people, setPeople] = useState(data);
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <main>
      <section className="container">
        <h3>Today is {date}</h3>
        <TodayBirthday people={people} today={today} />
        <h3>All Barrow Birthdays</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          Clear Birthdays
        </button>
      </section>
    </main>
  );
}

export default App;
