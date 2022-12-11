import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchPizza() {
    try {
      const { data } = await axios.get(`https://6390b51165ff4183111c5e40.mockapi.io/items/${id}`);
      setPizza(data);
    } catch (error) {
      alert('Error occured while trying to get pizza');
      navigate('/');
    }
  }

  React.useEffect(() => {
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>loading...</>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} $ </h4>
    </div>
  );
};

export default FullPizza;
