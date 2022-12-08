import React, { useState } from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['all', 'meat', 'vegeterian', 'grill', 'grill', 'grill'];
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li key={i} className={i === value ? 'active' : ''} onClick={() => onChangeCategory(i)}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
