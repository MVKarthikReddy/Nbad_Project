import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import api from '../utils/api';

const Reports = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/charts/reports-chart');
        console.log(response.data)
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div>
      <h1 className='font-bold'>Reports Chart</h1>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
        <p>
           This Bar Graph displays the total number of games played by each UNCC men's sports team in 2024.
           The size of each Bar represents the proportion of total games for that sport.
         </p>
    </div>
  );
};

export default Reports;

