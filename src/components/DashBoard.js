import { Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setAllCharts } from '../redux/Chart/chartAction';
import EditIcon from '@mui/icons-material/Edit';
import EditChartValues from './EditChartValues';

const StyledCard = styled(Paper)`
	padding: 1rem;
`;

function DashBoard() {
	const chartData = useSelector((state) => state.chartsState.charts);
	const dispatch = useDispatch();
	const [openEditPaned, setopenEditPaned] = useState({
		state: false,
		data: {},
	});
	useEffect(() => {
		fetch(
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json'
		)
			.then((x) => x.json())
			.then((data) => {
				dispatch(setAllCharts(data));
			});
		return () => {};
	}, []);

	const handleEditClose = (data) => {
		setopenEditPaned({ state: false, data });
	};

	return (
		<>
			<EditChartValues
				isOpen={openEditPaned.state}
				values={openEditPaned.data}
				handleClose={(data) => handleEditClose(data)}
			/>
			<Grid item sm={12} lg={!openEditPaned ? 8 : 12}>
				<Grid container spacing={2}>
					{chartData.map((data) => {
						return (
							<Grid item xs={6} key={data.id}>
								<StyledCard elevation={3}>
									<Grid container spacing={2}>
										<Grid item xs={10}>
											<Typography variant="overline">
												CHart : {data.id}
											</Typography>
										</Grid>
										<Grid item xs={2}>
											<IconButton
												color="secondary"
												onClick={() => setopenEditPaned({ state: true, data })}
											>
												<EditIcon />
											</IconButton>
										</Grid>
									</Grid>

									{data.type === 'Bar' && <BarChart data={data} />}
									{data.type === 'Pie' && <PieChart data={data} />}
								</StyledCard>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
}

export default DashBoard;
