import React, { ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IWorkShopCardItem } from '../../interfaces/IWorkShopCard';
import {
	Button,
	
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import styles from './WorkShopInfo.module.css';
import { WorkShopInfoList } from '../WorkShopInfoList/WorkShopInfoList';


interface Props {
	workshopArray: IWorkShopCardItem[];
}

export const WorkShopInfo: React.FC<Props> = ({
	workshopArray,
}): ReactElement => {
	const navigate = useNavigate();
	const { workshopId } = useParams();
	const workshop =
		workshopId !== undefined ? workshopArray[parseInt(workshopId, 10)] : null;

	return (
		<main className={styles.workshop_info}>
			<section className={styles.head_section}>
				<div>
					<Button onClick={() => navigate('/workshop/list')}>
						<ArrowBackIcon />
					</Button>
				</div>
				<div>
					<Button onClick={() => navigate(`/workshop/${workshopId}/stats`)}>
						<QueryStatsIcon />
					</Button>
					<Button>
						<EditIcon />
					</Button>
					<Button>
						<DeleteIcon />
					</Button>
				</div>
			</section>
			<WorkShopInfoList workshop={workshop}/>
		</main>
	);
};
