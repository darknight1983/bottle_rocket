import React from 'react';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Footer = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (<span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>
)
}


export default Footer;
