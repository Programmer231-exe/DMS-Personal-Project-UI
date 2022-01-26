import { Box, ButtonGroup, IconButton } from '@mui/material';
import * as React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return <Box sx={{ 
                        position: 'absolute',
                        bottom: 0,
                        width : '100%',
                        background: 'rgba(222, 219, 243,0.7);',
                        
                        }}>
                        <Box sx={{
                            display: 'flex',
                            textAlign: 'center',
                        fontFamily: 'Permanent Marker',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        textAlign: 'center'
                        }}>
                            <CopyrightIcon sx = {{fontSize: '25px', textAlign: 'center'}}/> <span>CopyRight Reserved</span>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            
                        fontFamily: 'Permanent Marker',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                        verticalAlign: 'initial'
                        }}>
                            <span >Follow Us On: </span><ButtonGroup>
                                <IconButton sx = {{
                                    color: 'blue',
                                    border: '2px solid rgba(255,0,0,0.4)'

                                }}><FacebookIcon /></IconButton>
                                <IconButton sx = {{
                                     border: '2px solid rgba(0,255,0,0.5)'
                                }}><TwitterIcon sx = {{
                                    color: 'blue',
                                   

                                }}/></IconButton>
                                <IconButton sx = {{
                                     border: '2px solid rgba(0,0,255,0.5)'
                                }}><InstagramIcon sx={{ color: 'rgba(255, 0, 0, 0.7)' }}/></IconButton>
                                <IconButton sx = {{
                                     border: '2px solid rgba(255,0,255,1)'
                                }}><LinkedInIcon sx = {{
                                    color: 'blue',

                                }}/></IconButton>
                               
                            </ButtonGroup>
                        </Box>
                    </Box>
}


export default Footer;