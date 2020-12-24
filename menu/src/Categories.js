import React from 'react';

const Categories = (props) => {

  const {filterItems, categories} = props;

  return <div className="btn-container">
    {categories.map((category, index) => 
    <button 
        className="filter-btn" 
        type="button"
        key={index} 
        onClick={() => filterItems(category)}>
          {category}
        </button>)}
  </div>;
};

export default Categories;
