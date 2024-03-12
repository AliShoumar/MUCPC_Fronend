import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';
import React, { ReactElement } from 'react';
import { renderValue } from '../../utils/renderValues';
import { capitalizeFirstLetter } from '../../utils/CapitalizeFirstLetter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { IWorkShopCardItem } from '../../interfaces/IWorkShopCard';
import styles from './WorkShopInfoLIst.module.css';
import { QrCode } from '../QrCode/QrCode';

interface Props {
	workshop: IWorkShopCardItem;
}

export const WorkShopInfoList: React.FC<Props> = ({
	workshop,
}): ReactElement => {
	return (
		<section className={styles.main_section}>
			{Object.entries(workshop).map(([key, value]) => {
				return (
					<div key={key}>
						<List>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar>
										<ImportContactsIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={capitalizeFirstLetter(key)}
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="text.primary">
												{renderValue(value)}
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
						</List>
					</div>
				);
			})}
			<div>
				<QrCode value={workshop.registrationLink}/>
			</div>
		</section>
	);
};
