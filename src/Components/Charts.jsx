import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Charts = () => {

    const data = [
        { value: 1 }, // Update with your data
        { value: 11 }, // Update with your data
    ];

    const COLORS = ['#FF444A', '#00C49F']; // Update with your desired colors

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div>
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-8">
                        <ResponsiveContainer width={400} height={400} className="text-center">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            
            {/* Color Indicators Below the Pie */}
            <div>
            <div className="row d-flex justify-content-center text-center">
                <div className="col-md-8">
                    <div style={{ backgroundColor: COLORS[0], width: '50px', height: '16px', display: 'inline-block', marginRight: '8px' }}>
                         
                    </div>
                    Donation
                    <div style={{ backgroundColor: COLORS[1], width: '50px', height: '16px', display: 'inline-block', marginLeft: '16px' }}></div>
                    Remaining
                </div>
            </div>
            </div>
        </>
    )
}

export default Charts;
