import React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const BannerContainer = (BannerComponent) => {
  
  //const theme = useTheme();
  //const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return props => {
    
    (<React.Fragment>
      <BannerComponent />
    </React.Fragment>)
  }
  }


export default BannerContainer;


