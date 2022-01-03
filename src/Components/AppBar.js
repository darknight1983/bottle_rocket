import React from 'react';
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MapIconImg from '../assets/icon_map@2x.png'

const StyledHeader = styled.div`
  background-color: #43E895;
  font-family: "Avenir Next", sans-serif;
  font-weight: bold;
  color: #FFFFFF;
`;

const MapIcon = styled.img.attrs({
    src: `${MapIconImg}`
})`
    width: 1.875rem;
    height: 1.875rem;
`;

const StyledTitle = styled.span`
  display: block;
  font-size: 20px;
`;


const AppBar = ({ sideBar, setSideBar}) => {
    return (
        <StyledHeader>
            <Grid container alignItems={"center"} >
                <Grid item xs={4}>
                    {sideBar && <ArrowBackIosIcon onClick={() => setSideBar((sideBar) => !sideBar)}/>}
                </Grid>
                <Grid item xs={4}>
                    <StyledTitle>Lunch Tyme</StyledTitle>
                </Grid>
                <Grid item xs={4}>
                    <MapIcon/>
                </Grid>
            </Grid>
        </StyledHeader>
    )
}

export default AppBar;
