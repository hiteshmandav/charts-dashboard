import {
	Button,
	FormControl,
	Grid,
	IconButton,
	Modal,
	Paper,
	Typography,
	TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { editChartValues } from '../redux/Chart/chartAction';
import CloseIcon from '@mui/icons-material/Close';
import BarChart from './BarChart';
import PieChart from './PieChart';

// import TextField from '../FormsCompoent/TextFeild/index';
const StyledCard = styled(Paper)`
	padding: 1rem;
`;

function EditChartValues(props) {
	const { isOpen, values, handleClose } = props;
	const [formState, setFormState] = useState(values);
	// const [open, setopen] = useState(isOpen);
	const [isError, setisError] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setFormState(values);
		// setopen(isOpen);
	}, [props]);

	const editChart = (e) => {
		e.preventDefault();
		validateAndDispatchEvents();
	};
	const validateAndDispatchEvents = () => {
		setisError(false);
		console.log(formState);
		if (formState.type === 'Pie') {
			const reducer = (previousValue, currentValue) =>
				previousValue + currentValue;
			formState.elements.reduce(reducer) !== 100
				? setisError(true)
				: setisError(false);
		}

		if (!isError) {
			dispatch(editChartValues(formState));
			// setopen(false);
			handleClose(formState);
		}
	};
	// useEffect(() => {
	// 	validateAndDispatchEvents();
	// }, [formState]);

	const handleValueUpdate = (index, event) => {
		setFormState((prevState) => {
			const elements = prevState.elements.map((x, i) => {
				if (i === index) return parseInt(event.target.value);
				return x;
			});
			return {
				...prevState,
				elements: elements,
			};
		});
	};
	return (
		<Modal
			open={isOpen}
			onClose={() => handleClose(formState)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledCard elevation={3}>
				<Grid container spacing={2}>
					<Grid item sm={12} lg={8}>
						<form onSubmit={editChart}>
							<Grid container>
								<Grid item xs={11}>
									<Typography variant="h4">
										Edit Values for chart {values.id}
									</Typography>
								</Grid>

								<Grid item xs={1}>
									<IconButton
										color="error"
										onClick={() => handleClose(formState)}
									>
										<CloseIcon />
									</IconButton>
								</Grid>
							</Grid>

							{formState.elements &&
								formState.elements.map((x, index) => (
									<Grid container key={index}>
										<Grid
											item
											xs={2}
											sx={{
												alignSelf: 'center',
												textAlign: 'center',
											}}
										>
											<Typography variant="overline">
												{values.label[index]}
											</Typography>
										</Grid>
										<Grid item xs={8}>
											<FormControl fullWidth sx={{ m: '1rem 0' }}>
												<TextField
													type="number"
													label="Vlaue"
													name={`${x}`}
													value={x}
													onChange={(event) => handleValueUpdate(index, event)}
													aria-describedby="enter value"
												/>
											</FormControl>
										</Grid>
									</Grid>
								))}

							<Button variant="outlined" type="submit" color="secondary">
								Save and Close
							</Button>
						</form>
					</Grid>
					<Grid item sm={12} lg={4}>
						{formState.type === 'Bar' && <BarChart data={formState} />}
						{formState.type === 'Pie' && <PieChart data={formState} />}
					</Grid>
				</Grid>
			</StyledCard>
		</Modal>
	);
}

export default EditChartValues;
