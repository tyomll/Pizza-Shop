import React, { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['all', 'meat', 'vegeterian', 'grill', 'grill', 'grill'];
  function onClickCategory(index) {
    setActiveIndex(index);
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              key={i}
              className={i === activeIndex ? 'active' : ''}
              onClick={() => onClickCategory(i)}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
