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
			<Button onClick={() => navigate('/workshop')} style={{margin:'0.8rem 0.6rem'}}>
				<ArrowBackIcon />
			</Button>
			<form className={styles.workshop_form}>
				<div className={styles.container}>
					<section className={styles.leftSection}>
						<TextField
							id="filled-basic"
							label="Name"
							variant="filled"
						/>
						<TextField
							id="filled-basic"
							label="Description"
							variant="filled"
							multiline
							rows={4}
							maxRows={0}
						/>
						<TextField id="filled-basic" label="Date" variant="filled" />
						<TextField id="filled-basic" label="Department" variant="filled" />
						<TextField id="filled-basic" label="Semester" variant="filled" />
						<TextField
							id="filled-basic"
							label="Duration In Hours"
							variant="filled"
							type="number"
						/>
					</section>
					<section className={styles.rightSection}>
						<TextField id="filled-basic" label="Speakers" variant="filled" />
						<TextField id="filled-basic" label="Target Faculties" variant="filled" />
						<TextField id="filled-basic" label="Attendance" variant="filled" />
						<TextField
							id="filled-basic"
							label="Max Number Of Students"
							variant="filled"
							type="number"
						/>
						<TextField id="filled-basic" label="Price" variant="filled" />
						<TextField id="filled-basic" label="Organized By" variant="filled" />
						<TextField id="filled-basic" label="Registration Link" variant="filled" />
					</section>
				</div>

				<div className={styles.submit_btn}>
					<Button>
						<ArrowUpwardIcon />
					</Button>
				</div>
			</form>
		</main>
	);
};
