import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['all', 'meat', 'vegeterian', 'grill'];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
};
export default Categories;
