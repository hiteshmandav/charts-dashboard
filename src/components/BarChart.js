import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
function BarChart(props) {
	const { data } = props;

	const options = {
		responsive: true,
	};

	const labels = data.label;

	const chartData = {
		labels,
		datasets: [
			{
				data: data.elements,
				backgroundColor: data.backgroundColor,
			},
		],
	};

	return <Bar options={options} data={chartData} />;
}

export default BarChart;
