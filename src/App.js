import './App.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './AppTheme';
import { Container, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DashBoard from './components/DashBoard';

function App() {
	const isDarkMode = localStorage.getItem('is-dark-mode')
		? localStorage.getItem('is-dark-mode')
		: localStorage.setItem('is-dark-mode', false);
	// console.log(isDarkMode);
	const [darkmode, setdarkmode] = useState(isDarkMode);

	const toggleMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setdarkmode((prevMode) => {
					localStorage.setItem('is-dark-mode', !prevMode);
					return !prevMode;
				});
			},
		}),
		[]
	);
	// console.log(darkmode);

	const darktheme = React.useMemo(
		() =>
			createTheme(
				{
					palette: {
						mode: darkmode ? 'dark' : 'light',
					},
				},
				darkmode ? darkTheme : lightTheme
			),
		[darkmode]
	);
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={darktheme}>
					<CssBaseline />
					<Navbar darkmode={darkmode} toggleMode={toggleMode} />
					<Container maxWidth="xl">
						<DashBoard />
					</Container>
				</ThemeProvider>
			</Provider>
		</>
	);
}

export default App;
