import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { keyframes } from '@mui/system';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import BackupIcon from '@mui/icons-material/Backup';
import SecurityIcon from '@mui/icons-material/Security';

const Banner = () => {

  const spin = keyframes`
  from{
      
      color: red;
  }
  to{
      
      color: green;
  }`
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (<React.Fragment>
      {matches ? 
    <Box sx = {{
        backgroundColor: 'rgba(53, 20, 236,0.1)',
        borderRadius: '5px',
        height: '100%',
        display: 'flex',
        flexDirection: 'Column',
        alignItems: 'center',
        justifyContent: 'center'
        

    }}>

        <FolderIcon sx = {{
            
            textAlign: 'center',
            marginTop : '10%',
            fontSize: '100px',
            color: 'red',
            animation: `${spin} 2s infinite ease`
        }} />

<List sx={{ width: '100%', maxWidth: 360 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: 'rgba(252, 39, 15, 0.7)' }}>
            <CloudCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Real Time Cloud Storage" secondary="Don't Worry about Device Storage" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: 'rgba(39, 252, 15, 0.7)' }}>
            <BackupIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Easy Upload" secondary="Easy steps to upload file" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: 'rgba(255, 0, 0, 0.7)' }}>
            <SecurityIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Real-Time Security" secondary="Two Factor Authentication" />
      </ListItem>
    </List>
    </Box>: <React.Fragment/>}
  </React.Fragment>
  );
}

export default Banner;