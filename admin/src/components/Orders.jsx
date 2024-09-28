import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:5000/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            Product ID: {order.productId}, Quantity: {order.quantity}, Payment Status: {order.paymentStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
