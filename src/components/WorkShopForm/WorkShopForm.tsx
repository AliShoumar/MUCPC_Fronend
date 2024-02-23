import { Button, TextField } from '@mui/material';
import { ReactElement } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './WorkShop.module.css';
import { useNavigate } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const WorkShopForm = (): ReactElement => {
	const navigate = useNavigate();
	return (
		<main className={styles.main}>
			<Button onClick={() => navigate('/workshop')}>
				<ArrowBackIcon />
			</Button>

			<form className={styles.workshop_form}>
				<TextField id="filled-basic" label="work shop name" variant="filled" />
				<TextField
					id="filled-basic"
					label="desciption"
					variant="filled"
					multiline
					rows={4}
					maxRows={0}
				/>
				<TextField id="filled-basic" label="date" variant="filled" />
				<TextField id="filled-basic" label="department" variant="filled" />
				<TextField id="filled-basic" label="semester" variant="filled" />
				<TextField
					id="filled-basic"
					label="duration in hours"
					variant="filled"
					type="number"
				/>
				<TextField id="filled-basic" label="instructor" variant="filled" />
				<TextField id="filled-basic" label="Attendance" variant="filled" />
				<TextField
					id="filled-basic"
					label="max number of students"
					variant="filled"
					type="number"
				/>
                <div className={styles.submit_btn}>
                  <Button>
					<ArrowUpwardIcon />
				</Button>  
                </div>
				
			</form>
		</main>
	);
};
