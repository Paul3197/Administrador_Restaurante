import React from 'react';

function Menu() {
  const categories = [
    { name: 'Todas', items: 91 },
    { name: 'Arroces', items: 20 },
    { name: 'Tallarines', items: 15 },
    { name: 'Entradas', items: 10 },
    { name: 'Infusiones', items: 12 },
    { name: 'Cervezas', items: 22 },
    { name: 'Gaseosas', items: 12 }
  ];

  const menuItems = [
    {
      product: 'Arroz chaufa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      type: 'Preparado',
      quantity: 119,
      category: 'Arroces',
      price: 'S/ 17.00',
      availability: 'En Stock',
      img: './img/chaufa.jpeg' 
    },
  ];

  return (
    <div className="menu">
      <h2>Menú</h2>

      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className={`category ${index === 0 ? 'active' : ''}`}>
            <h4>{category.name}</h4>
            <p>{category.items} items</p>
          </div>
        ))}
      </div>

      <div className="menu-items">
        <div className="menu-header">
          <button className="add-category-btn">Agregar Categoría</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Cantidad</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Disponibilidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td><img src={item.img} alt={item.product} className="product-img" /></td>
                <td>{item.product}</td>
                <td>{item.type}</td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.availability}</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-product-btn">
          <button>Agregar Producto</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
