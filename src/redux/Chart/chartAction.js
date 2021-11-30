import { EDIT_CHART_VALUES, SET_ALL_CHARTS } from './chartType';

export const setAllCharts = (payload) => {
	return {
		type: SET_ALL_CHARTS,
		payload,
	};
};

export const editChartValues = (payload) => {
	return {
		type: EDIT_CHART_VALUES,
		payload,
	};
};
