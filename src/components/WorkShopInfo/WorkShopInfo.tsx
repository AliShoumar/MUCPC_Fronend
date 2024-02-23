import { ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IWorkShopCardItem } from '../../interfaces/IWorkShopCard';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './WorkShopInfo.module.css';

interface Props {
	workshopArray: IWorkShopCardItem[];
}

export const WorkShopInfo: React.FC<Props> = ({
	workshopArray,
}): ReactElement => {
	const navigate = useNavigate();
	const { workshopId } = useParams();
	const workshop = workshopArray[workshopId];
	console.log(workshop);
	return (
		<main className={styles.workshop_info}>
			<section className={styles.head_section}>
				<div>
					<Button onClick={() => navigate('/workshop/list')}>
						<ArrowBackIcon />
					</Button>
				</div>
				<div>
					<Button>
						<EditIcon />
					</Button>
					<Button>
						<DeleteIcon />
					</Button>
				</div>
			</section>
			<section className={styles.main_section}>
				<h2>Title: {workshop.title}</h2>
				<span>Id: {workshop.id}</span>
				<p>Date: {workshop.date}</p>
				<p>Description: {workshop.description}</p>
				<p>Department: {workshop.department}</p>
				<p>Semester: {workshop.semester}</p>
				<p>Instructor: {workshop.instructor}</p>
				<p>Duration: {workshop.duration}</p>
				<p>Attendace: {workshop.attendance}</p>
                <p>Price: {workshop.isFree ? 'Free' : workshop.price}</p>
                <p>Notes: </p>
                <p>Number Of Registered Students: </p>
			</section>
		</main>
	);
};
