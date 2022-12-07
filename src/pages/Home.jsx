import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://6390b51165ff4183111c5e40.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
    </>
  );
};

export default Home;
