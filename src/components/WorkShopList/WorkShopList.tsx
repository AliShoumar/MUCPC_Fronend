import { Filter } from "./../Filter/FIlter";
import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import { FooterPagination } from "../Pagination/FooterPagination";
import { WorkShopCard } from "../WorkShopCard/WorkShopCard";
import { IWorkShopCardItem } from "../../interfaces/IWorkShopCard";

interface Props {
	workshopArray: IWorkShopCardItem[];
}

export const WorkShopList : React.FC<Props> = ({workshopArray}):ReactElement =>{

    return <>

			<Filter/>
			<Box
				sx={{
					width: '100%',
					paddingX: 2,
					display: 'flex',
					justifyContent: 'center',
				}}>
				<Box sx={{ maxWidth: '1000px', width: '100%' }}>
					<Grid
						container
						justifyContent="flex-start"
						rowSpacing={3}
						columnSpacing={3}>
						{workshopArray.map((workshop, index) => (
							<Grid key={index} item xs={12} sm={6} md={4}>
								<WorkShopCard workShop={workshop} id={index} key={index} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			<FooterPagination/>
    </>
}