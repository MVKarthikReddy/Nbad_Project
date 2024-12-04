

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../utils/api';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];
const Summary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/charts/summary-chart');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Total wins by uncc in 2024</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label
                          >
                            {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                  </ResponsiveContainer>
          <div>
      <h1>Summary Chart</h1>
      
      <p>The chart displays the wins by UNC Charlotte sports teams in 2024.</p>
    </div>


        </div>

        <div className="mt-6 prose">
          <br /><br />
          <h3>About this Chart</h3>
            <p className="mt-4 text-gray-700">
           This chart represents key metrics related to student engagement at UNCC. 
           The data shows various aspects of student participation in university activities 
           and programs, helping us understand trends and patterns in student involvement.
         </p>
         <p className="mt-2 text-sm text-gray-500">
           Data source: UNCC Student Athletics Data
         </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;