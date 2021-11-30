import { createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
	palette: {
		// palette values for light mode
		primary: {
			main: '#8bc34a',
		},
		secondary: {
			main: '#ffc400',
		},
		divider: amber[200],

		background: {
			default: '#E6DEDD',
			paper: '#F8F7DE',
		},
		text: {
			primary: grey[900],
			secondary: grey[800],
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		primary: {
			main: '#8bc34a',
		},
		secondary: {
			main: '#ffc400',
		},
		background: {
			default: '#082032',
			paper: '#334756',
		},
		text: {
			primary: '#fff',
			secondary: grey[500],
		},
	},
});
