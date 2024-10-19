import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, table: 1, item: 'Arroz Chaufa', status: 'En preparación' },
    { id: 2, table: 2, item: 'Tallarin Saltado', status: 'Listo' },
    { id: 3, table: 3, item: 'Pollo a la Brasa', status: 'Entregado' }
  ];

  return (
    <div>
      <h2>Órdenes</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Mesa {order.table} - {order.item} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
