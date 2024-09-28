import React from 'react';
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';

const App = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AddProduct />
      <Orders />
    </div>
  );
};

export default App;
