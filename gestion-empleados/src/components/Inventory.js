import React from 'react';

const Inventory = () => {
  const ingredients = [
    { id: 1, name: 'Arroz', quantity: '10kg' },
    { id: 2, name: 'Pollo', quantity: '5kg' },
    { id: 3, name: 'Salsa de soya', quantity: '2L' }
  ];

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
