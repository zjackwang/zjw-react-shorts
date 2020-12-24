import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
 
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const filteredItems = items.filter((item) => item.category === category);
      console.log(filteredItems);
      setMenuItems(filteredItems);
    }
  }

  return (<main>
    <div className="menu">
      <section className="title">
      <h2 >Menu</h2>
      <div className="underline"></div>
      </section>
        <Categories categories={categories} filterItems={filterItems}/>
      <div>
        <Menu items={menuItems}/>
      </div>
      </div>
  </main>
  )
}

export default App;
