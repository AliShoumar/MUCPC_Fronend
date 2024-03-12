import { ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';

import './index.css';
import { WorkShop } from './pages/WorkShop/WorkShop';
import { WorkShopList } from './components/WorkShopList/WorkShopList';
import { IWorkShopCardItem } from './interfaces/IWorkShopCard';
import { WorkShopForm } from './components/WorkShopForm/WorkShopForm';
import { WorkShopInfo } from './components/WorkShopInfo/WorkShopInfo';
import { WorkShopStatsPage } from './pages/WorkShopStats/WorkShopStatsPage';

const workshopArray: IWorkShopCardItem[] = [
	{
		title: 'Code to Success',
		date: 'Feb 8,2024',
		instructor: 'Mubarak Mohammad',
		isFree: true,
		duration: '2 hours',
		startTime: '2:00 pm',
		department: 'Science',
		semester: 'Fall',
		attendance: 'Online',
	},
	{
		title: 'Bit N Build Hackathon',
		date: 'February 17, 2024',
		instructor: 'Fatima Abdallah',
		isFree: true,
		duration: '6 hours',
		startTime: '12:00 pm',
		department: 'Science',
		semester: 'Fall',
		attendance: 'Online',
		registrationLink:'kdasfajlkd'
	},
	{
		title: 'Cyber Security',
		date: 'December 5,2023',
		instructor: 'Semicolon',
		isFree: true,
		duration: '3 hours',
		startTime: '2:00 pm',
		department: 'Science',
		semester: 'Fall',
		attendance: 'Online',
	},
	{
		title: 'KickOff Event',
		date: 'October 31, 2023',
		instructor: 'Code_it',
		isFree: true,
		duration: '1 hour',
		startTime: '3:30 pm',
		department: 'Science',
		semester: 'Fall',
		attendance: 'Online',
	},
];

export const App = (): ReactElement => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />}>
						<Route index element={<Navigate replace to={'login'} />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<SignUp />} />
					</Route>
					<Route path="workshop" element={<WorkShop />}>
						<Route index element={<Navigate replace to={'list'} />} />
						<Route
							path="list"
							element={<WorkShopList workshopArray={workshopArray} />}
						/>
						<Route path="new" element={<WorkShopForm />} />
						<Route path=":workshopId">
							<Route
								index
								element={<WorkShopInfo workshopArray={workshopArray} />}
							/>
							<Route path='stats' element={<WorkShopStatsPage/>}/>
						</Route>
					</Route>
					<Route path="*" element={<h4>404 Working on it ;)</h4>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
