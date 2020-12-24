import React from 'react';

const Menu = (props) => {
  const {items} = props;
  return <div className="section-center">
      {items.map((item) => {
        return (<article className="menu-item" key={item.id}>
            <div className="container">
              <img className="photo" src={item.img} alt={item.title} />
            </div>
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <p className="price">{item.price}</p>
              </header>
              <div className="item-text">
                <p>{item.desc}</p>
              </div>
            </div>
        </article>)
      })}
    
    </div>;
};

export default Menu;
