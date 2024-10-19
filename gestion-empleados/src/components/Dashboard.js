import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  // Datos para el gráfico de pie
  const dataVentasProductos = [
    { name: 'Pizza', value: 400 },
    { name: 'Hamburguesa', value: 300 },
    { name: 'Sushi', value: 300 },
  ];

  const dataCategorias = [
    { name: 'Bebidas', value: 500 },
    { name: 'Entradas', value: 200 },
    { name: 'Platos principales', value: 300 },
  ];

  const dataMesas = [
    { name: 'Mesa 10', value: 100 },
    { name: 'Mesa 12', value: 80 },
    { name: 'Mesa 5', value: 50 },
  ];

  // Datos para el gráfico de barras
  const ventasPorMes = [
    { mes: 'Octubre', ventas: 2400 },
    { mes: 'Noviembre', ventas: 2210 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard">
      <h2>Panel de Control</h2>
      <div className="stats">
        <div className="stat">
          <h3>Platos más vendidos</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={dataVentasProductos}
              cx={100}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {dataVentasProductos.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="stat">
          <h3>Categorías más vendidas</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={dataCategorias}
              cx={100}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
              paddingAngle={5}
              dataKey="value"
            >
              {dataCategorias.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="stat">
          <h3>Mesas más usadas</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={dataMesas}
              cx={100}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              fill="#ffc658"
              paddingAngle={5}
              dataKey="value"
            >
              {dataMesas.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      <div className="sales">
        <h3>Ventas por mes</h3>
        <BarChart
          width={500}
          height={300}
          data={ventasPorMes}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ventas" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
