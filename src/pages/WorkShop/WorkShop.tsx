import { ReactElement } from 'react';
import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';



export const WorkShop = (): ReactElement => {
	return (
		<div>
			<Header/>
			<Outlet/>
		</div>
	);
};
