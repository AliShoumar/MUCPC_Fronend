import { ReactElement } from 'react';
import styles from './Filter.module.css';
import {
	Fab,
	FormControl,
	InputLabel,
	NativeSelect,
	TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export const Filter = (): ReactElement => {
	const navigate = useNavigate();
	return (
		<div className={styles.filter}>
			<TextField
				id="standard-basic"
				label="Filter"
				variant="standard"
				sx={{ marginRight: '3rem', width: '20rem' }}
			/>
			<FormControl>
				<InputLabel variant="standard" htmlFor="uncontrolled-native">
					By
				</InputLabel>
				<NativeSelect defaultValue={'title'}>
					<option value={'title'}>Title</option>
					<option value={'id'}>Id</option>
					<option value={'date'}>Date</option>
					<option value={'department'}>Department</option>
					<option value={'semester'}>Semester</option>
					<option value={'duration'}>Duration</option>
					<option value={'instructor'}>Instructor</option>
					<option value={'registered students'}>Registered Students</option>
				</NativeSelect>
			</FormControl>
			<Fab color="primary" aria-label="add" sx={{
				marginLeft:'40px',
				padding:'8x'
			}}
			onClick={() => navigate('/workshop/new')}
			>
			<AddIcon/>
			</Fab>
		</div>
	);
};
