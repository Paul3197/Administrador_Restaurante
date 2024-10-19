import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Panel</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/empleados">Empleados</Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/inventario">Inventario</Link></li>
        <li><Link to="/mesas">Mesas</Link></li>
        <li><Link to="/ordenes">Órdenes</Link></li>
      </ul>
      <div className="sidebar-footer"> {/* Pie de página opcional */}
        <button className="logout-btn">Salir</button>
      </div>
    </div>
  );
}

export default Sidebar;
