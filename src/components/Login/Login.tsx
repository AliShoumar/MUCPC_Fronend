import { Button, TextField, makeStyles } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";


export const Login = () =>{
	const navigate = useNavigate();
    return <main>
        	<form >
				<TextField id="email" label="Email" variant="standard" fullWidth style={{
					marginBottom:'1.5rem',
				}}/>
				<TextField id="password" label="Password" variant="standard" fullWidth style={{
				  marginBottom:"1.5rem"
				}}/>

                <section style={{
					marginLeft:"5.8rem",
					marginTop:"1rem"
				}}>
                    <Button variant="outlined" onClick={() => navigate("/workshop")}>
					Login
					<LoginIcon />
				</Button>
                </section>
			</form>
    </main>
}