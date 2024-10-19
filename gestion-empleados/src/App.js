import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import Inventory from './components/Inventory';
import Tables from './components/Tables';
import Orders from './components/Orders';
import './Styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/empleados" element={<EmployeeList />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/inventario" element={<Inventory />} />
            <Route path="/mesas" element={<Tables />} />
            <Route path="/ordenes" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
