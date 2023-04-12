import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Assignment 1', value: 57 },
    { name: 'Assignment 2', value: 59 },
    { name: 'Assignment 3', value: 58 },
    { name: 'Assignment 4', value: 43 },
    { name: 'Assignment 5', value: 58 },
    { name: 'Assignment 6', value: 53 },
    { name: 'Assignment 7', value: 60 },
    { name: 'Assignment 8', value: 57 },
];

const Statistics = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h3 className='fw-bold text-center mt-5'>Assignment Marks in Pie Chart</h3>
            
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#04AEC4"
                        label
                    />
                    <Tooltip />
                </PieChart>
           
        </div>
    );
};

export default Statistics;