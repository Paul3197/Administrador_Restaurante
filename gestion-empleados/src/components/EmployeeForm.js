import React, { useState } from 'react';

function EmployeeForm({ setShowForm, setEmployees, employees }) {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    idType: '',
    idNumber: '',
    phone: '',
    role: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, employeeData]);
    setShowForm(false);
  };

  return (
    <div className="modal">
      <h2>Nuevo Empleado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={employeeData.name}
          onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })}
        />
        <select
          value={employeeData.idType}
          onChange={(e) => setEmployeeData({ ...employeeData, idType: e.target.value })}
        >
          <option value="">Tipo de Documento</option>
          <option value="DNI">DNI</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
        <input
          type="text"
          placeholder="Número de Documento"
          value={employeeData.idNumber}
          onChange={(e) => setEmployeeData({ ...employeeData, idNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={employeeData.phone}
          onChange={(e) => setEmployeeData({ ...employeeData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rol"
          value={employeeData.role}
          onChange={(e) => setEmployeeData({ ...employeeData, role: e.target.value })}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
