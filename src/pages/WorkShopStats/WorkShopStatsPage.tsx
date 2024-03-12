import { Button } from '@mui/material';
import { ReactElement, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import styles from './WorkShopStatsPage.module.css';
import {
	Gender,
	IActivityStatistics,
} from '../../interfaces/IActivityStatistics';
import { WorkShopStatsTable } from './../../components/WorkShopStatTable/WorkShopStatTable';
import { ActivityEvaluationTable } from '../../components/ActivityEvaluationTable/ActivityEvaluationTable';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const activityStatistics: IActivityStatistics = {
	registeredStudents: 200,
	studentMajor: [
		{
			major: 'Computer Science',
			count: 100,
			percent: 50,
		},
		{
			major: 'MIT',
			count: 50,
			percent: 25,
		},
		{
			major: 'Engineering',
			count: 50,
			percent: 50,
		},
	],
	studentFromWhichYear: [
		{
			year: 'First Year',
			count: 100,
			percent: 50,
		},
		{
			year: 'Second Year',
			count: 50,
			percent: 25,
		},
		{
			year: 'Third Year',
			count: 50,
			percent: 25,
		},
		{
			year: 'Fourth Year',
			count: 0,
			percent: 0,
		},
		{
			year: 'Fifth Year',
			count: 0,
			percent: 0,
		},
	],
	studentGender: [
		{
			gender: Gender.Male,
			count: 150,
			percent: 75,
		},
		{
			gender: Gender.Female,
			count: 50,
			percent: 25,
		},
	],
	StudentWithSpecialNeeds: [
		{
			specialNeeds: 'Yes',
			count: 0,
			percent: 0,
		},
		{
			specialNeeds: 'No',
			count: 200,
			percent: 100,
		},
	],
};

export const WorkShopStatsPage = (): ReactElement => {
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();
	const { workshopId } = useParams();

	const downloadPDF = () => {
        const capture = document.getElementById('stats'); // Assuming 'stats' is the id of the section you want to capture
        setLoader(true); // Move the loader state update here
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save(`workshop-stats-${workshopId}.pdf`);
            setLoader(false); // Update loader state when PDF is generated
        }).catch(error => {
            console.error('Error generating PDF:', error);
            setLoader(false); // Ensure loader state is updated even in case of error
        });
    };
    

	return (
		<div className={styles.mainStats}>
			<section className={styles.header}>
				<div>
					<Button onClick={() => navigate(`/workshop/${workshopId}`)}>
						<ArrowBackIcon />
					</Button>
				</div>
				<div>
					<Button onClick={downloadPDF} disabled={!(loader === false)}>
						<PictureAsPdfIcon />
					</Button>
				</div>
			</section>
			<section id="stats">
				<WorkShopStatsTable tableData={activityStatistics} />
				<ActivityEvaluationTable studentCount={100} />
			</section>
		</div>
	);
};
