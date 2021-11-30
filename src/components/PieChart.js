import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props) {
	const { data } = props;
	const chartData = {
		labels: data.label,
		datasets: [
			{
				data: data.elements,
				backgroundColor: data.backgroundColor,
			},
		],
	};

	return <Pie data={chartData} />;
}

export default PieChart;
