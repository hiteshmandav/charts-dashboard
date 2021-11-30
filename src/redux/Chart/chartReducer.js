import { EDIT_CHART_VALUES, SET_ALL_CHARTS } from './chartType';
import { v4 as uuidv4 } from 'uuid';

const initialChartState = {
	charts: [],
};

const chartStateReducer = (state = initialChartState, action) => {
	switch (action.type) {
		case SET_ALL_CHARTS: {
			const chartvaluesWithID = action.payload.map((x) => {
				x.id = uuidv4();
				x.label = x.elements.map((value, index) => `element${index}`);

				x.backgroundColor = x.elements.map(
					() =>
						`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
							Math.random() * 256
						)},${Math.floor(Math.random() * 256)}`
				);
				return {
					...x,
				};
			});
			return {
				...state,
				charts: chartvaluesWithID,
			};
		}
		case EDIT_CHART_VALUES: {
			const chartvaluesWithID = state.charts.map((x) => {
				if (x.id === action.payload.id) {
					x = action.payload;
				}
				return {
					...x,
				};
			});
			return {
				...state,
				charts: chartvaluesWithID,
			};
		}
		default:
			return state;
	}
};

export default chartStateReducer;
