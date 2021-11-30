import { combineReducers } from 'redux';
import chartStateReducer from './Chart/chartReducer';

export const rootReducer = combineReducers({
	chartsState: chartStateReducer,
});
