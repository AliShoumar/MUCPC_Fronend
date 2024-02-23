import { Button, TextField } from "@mui/material";
import { ReactElement } from "react";
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const SignUp = ():ReactElement =>{

    return <main>
    <form >
        <TextField id="name" label="Name" variant="standard" fullWidth style={{
            marginBottom:'0.4rem',
        }}/>
        <TextField id="email" label="Email" variant="standard" fullWidth style={{
            marginBottom:'0.4rem',
        }}/>
        <TextField id="password" label="Password" variant="standard" fullWidth style={{
          marginBottom:"0.4rem"
        }}/>

        <section style={{
            marginLeft:"7.8rem",
            marginTop:"1.4rem"
        }}>
            <Button variant="outlined">
                <HowToRegIcon/>
        </Button>
        </section>
        
    </form>
</main>
}