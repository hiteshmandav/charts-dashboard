import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';

function Navbar(props) {
	return (
		<>
			<Box sx={{ flexGrow: 1, mb: 2 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Charts Dashboard
						</Typography>
						<IconButton
							color="inherit"
							onClick={props.toggleMode.toggleColorMode}
						>
							{props.darkmode ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default Navbar;
