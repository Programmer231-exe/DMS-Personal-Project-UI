import { Avatar, Grid, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import * as React from 'react';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LoginForm from './login-form';

const Login = (props) => {
    return <Grid container direction="row" rowSpacing={20}>
        <Grid item md={12}>
        <Grid container direction="row" columnSpacing={2} alignItems="center" alignContent="center">
            <Grid item>
                <DocumentScannerIcon sx={{
                    fontSize: {xs:'40px', md:'35px'},
                    color: 'blue',
                    
                }}/>
            </Grid>
            <Grid item>
                <Typography  sx={{
                    fontSize: {xs:'14px', md:'20px'},
                    color: 'red',
                    fontFamily: 'Permanent Marker',
                    
                }} variant='h6' component='h6'>Document Management System</Typography>
            </Grid>
            </Grid>
            <Grid item md={12}>
                <Typography  sx={{
                    fontSize: {xs:'20px', md:'25px'},
                    textAlign: 'center',
                    fontFamily: 'Pacifico',
                    color: 'rgba(0,0,0,0.5)',
                    marginTop: '5%',
                }} variant='h6' component='h6'>Welcome Back Please Login to your account</Typography>
            </Grid>
            <Grid item md={12}>
                <LoginForm />
            </Grid>
        </Grid>
        </Grid>
    
}

export default Login;