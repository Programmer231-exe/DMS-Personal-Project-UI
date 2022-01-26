import * as React from 'react';
import { Button, ButtonGroup, Container, Grid } from '@mui/material';
import Login from '../components/login/login'
import Banner from '../utils/banner';


const home = (props) => {
    return <Grid container sx ={{
        borderRadius: '15px',
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: {xs: '25%', md: '7%'} ,
        marginLeft: {xs:'5%',md:'10%' },
        width: {xs:'90%',md:'80%' },

       
    }}>
            <Grid item xs={12} md={6} sx={{
                padding: {md:'5%',xs:'10%'},
               
                
            }}>
                <Login/>
            </Grid>
            <Grid item xs={12} md={6} >
                <Banner/>
            </Grid>
            
        </Grid> 
    
}

export default home;