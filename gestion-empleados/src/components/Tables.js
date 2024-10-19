import React from 'react';

const Tables = () => {
  const tables = [
    { id: 1, status: 'Disponible' },
    { id: 2, status: 'Ocupada' },
    { id: 3, status: 'Reservada' }
  ];

  return (
    <div>
      <h2>Mesas</h2>
      <ul>
        {tables.map(table => (
          <li key={table.id}>
            Mesa {table.id} - {table.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tables;
