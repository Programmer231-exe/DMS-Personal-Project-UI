import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <Box sx={{ 
            marginTop: '10%'}}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '3%'  }}>
        <AccountCircle sx={{ color: 'rgba(252, 39, 15, 0.7)', mr: 1, my: 0.5, 
        fontSize:{xs:'30px', md:'35px'} }} />
        <TextField id="username" name="username" label="Username" variant="standard"  fullWidth={true}
        inputProps={
            {
                style:{
                    fontFamily: 'Permanent Marker',
                    fontSize: '25ps'
                }
            }
        }
        
        InputLabelProps={
            {
                style:{
                    fontFamily: 'Pacifico',
                    fontSize: '20px'
                }
            }
        }/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '7%'  }}>
        <KeyIcon sx={{ color: 'rgba(252, 39, 15, 0.7)'  , mr: 1, my: 0.5,
        fontSize:{xs:'30px', md:'35px'} }} />
        <TextField id="password" name="password" label="Password" variant="standard" fullWidth="true" 
        inputProps={
        {
            type: 'password',
            fontFamily: 'Pacifico',
            
        }

        
        }
        
        InputLabelProps={
            {
                style:{
                    fontFamily: 'Pacifico',
                    fontSize: '20px'
                }
            }
        }/>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' , alignItems: 'center', marginTop: '4%', justifyContent: 'space-between'  }}>
        <FormControlLabel sx = {{
            fontFamily: 'Pacifico',
            fontSize: '20px'
            }}
            control={<Checkbox defaultChecked />} 
         label={<Typography sx={{
             fontFamily: 'Pacifico',
             fontSize: '15px'
         }}>Remember Me</Typography>} />

        <Typography align="justify" sx={{
            fontFamily: 'Pacifico',
             fontSize: '15px',  
             flexGrow: 2,
             textAlign: 'right'
             
         }}><Link to="document-management-system/resetpassword">Forgot Password ?</Link></Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' , alignItems: 'center', marginTop: '2.5%', justifyContent: 'space-between'  }}>
      <Button variant="contained"
      sx ={{
          background: 'linear-gradient(-50deg,red, orange);',
          width: '50%'
      }}>Log In</Button>
     
      <Button variant="contained"
      sx ={{
          background: 'grey',
          
      }}>Sign Up</Button>
      </Box>
    </Box>
  );
}
