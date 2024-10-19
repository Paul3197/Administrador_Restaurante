import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import '../Styles/EmployeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([
    { name: 'Juan Pérez', idType: 'DNI', idNumber: '12345678', phone: '987654321', role: 'Administrador' },
    // Otros empleados
  ]);
  const [showForm, setShowForm] = useState(false);

  const deleteEmployee = (index) => {
    const newEmployees = employees.filter((_, i) => i !== index);
    setEmployees(newEmployees);
  };

  return (
    <div className="employee-list">
      <h2>Empleados</h2>
      <button onClick={() => setShowForm(true)}>Agregar Empleado</button>
      {showForm && <EmployeeForm setShowForm={setShowForm} setEmployees={setEmployees} employees={employees} />}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo de Documento</th>
            <th>Número de Documento</th>
            <th>Teléfono</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.idType}</td>
              <td>{employee.idNumber}</td>
              <td>{employee.phone}</td>
              <td>{employee.role}</td>
              <td>
                <button onClick={() => deleteEmployee(index)}>Eliminar</button>
                <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
