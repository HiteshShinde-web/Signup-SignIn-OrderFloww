import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    status: 'PENDING',
    is_cash: true,
  });

  const fetchOrders = () => {
    axios.post('https://test-api.achilyon.in/v1/orders/all-orders', filters)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value === 'true' ? true : e.target.value,
    });
  };

  return (
    <div className="orders-container">
      <h2 style={{ textAlign: 'center' }}>Orders</h2>
      <div className="select-container">
        <label>
          Status:
          <select name="status" onChange={handleFilterChange}>
            <option value="PENDING">Pending</option>
            <option value="SERVED">Served</option>
          </select>
        </label>
        <label>
          Cash Payment:
          <select name="is_cash" onChange={handleFilterChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
      </div>
      <div>
        {orders.map((order, index) => (
          <div key={index} className="order">
            <p><span className="label">Status:</span> {order.status}</p>
            <p><span className="label">Order Version:</span> {order.order_version}</p>
            <p><span className="label">Cash Payment:</span> {order.is_cash ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
