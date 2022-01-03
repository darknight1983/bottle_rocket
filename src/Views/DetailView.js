import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import AppBar from "../Components/AppBar";
import App from "../App";
import Map from "../Components/Map";
import Grid from '@mui/material/Grid';
import {Style} from "@mui/icons-material";

const SliderView = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  margin: 0;
  height: 100vh;
`

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`

const MidInfoBar = styled.div`
  height: 60px;
  width: 100%;
  background-color: green;
  position: relative;
`

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
`

const TitleComp = styled.span`
  color: white;
  display: block;
  font-family: "Avenir Next",sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
  margin-left: 12px
`

const CategoryText = styled.span`
  display: block;
  color: white;
  font-family: "Avenir Next",sans-serif;
  font-size: 12px;
  text-align: left;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 12px
`

const RestaurantInfoContainer = styled.div`
  height: 100vh;
  background-color: #FFFFFF;
  font-family: "Avenir Next", sans-serif;
  font-size: 16px;
  color: #2A2A2A;
  margin-left: 12px;
`;

const StyledAddress = styled.div`
  text-align: start;
  padding-top: 16px;
  padding-bottom: 26px;
`;

const AddressText = styled.span`
  display: block;
  text-align: start;
 
`;

const PhoneNumber = styled.span`
  display: block;
  text-align: start;
  padding-bottom: 26px;
`;

const TwitterHandle = styled.span`
  display: block;
  text-align: start;
`;


const DetailView = ({sideBar , setSideBar}) => {
    const selectedRestaurant = useSelector(state => state.selectedRestaurant);
    const { name, category, location, contact } = selectedRestaurant;

    return (
        <AnimatePresence>
            {sideBar && (
                <>
                    <SliderView
                        initial={{x: "100%"}}
                        animate={{
                            x: 0,
                        }}
                        exit={{
                            x: "100%"
                        }}
                        transition={{type: "spring", bounce: 0, duration: 0.4}}

                    >
                        <Grid container spacing={0} xs={12}>
                            <Grid item xs={12}>
                                <AppBar sideBar={sideBar} setSideBar={setSideBar}/>
                            </Grid>
                            <Grid item xs={12}>
                                <MapContainer>
                                    <Map lat={location ? location.lat : ""} lng={location ? location.lng : ""}/>
                                </MapContainer>
                            </Grid>
                            <Grid item xs={12}>
                                <MidInfoBar>
                                    <InfoContainer>
                                        <TitleComp>{name ? name : ""}</TitleComp>
                                        <CategoryText>{category ? category : ""}</CategoryText>
                                    </InfoContainer>
                                </MidInfoBar>
                            </Grid>
                            <Grid item xs={12}>
                                <RestaurantInfoContainer>
                                    <StyledAddress>
                                        <AddressText>{location.address ? location.address : ""}</AddressText>
                                        <AddressText>{`${location.city ? location.city : ""}, ${location.state ? location.state : ""} ${location.postalCode ? location.postalCode : ""}`}</AddressText>
                                    </StyledAddress>
                                    <PhoneNumber>
                                        {contact !== null ? contact.formattedPhone : ""}
                                    </PhoneNumber>
                                    <TwitterHandle>
                                        {contact ? `@${contact.twitter}` : ""}
                                    </TwitterHandle>
                                </RestaurantInfoContainer>
                            </Grid>
                        </Grid>
                    </SliderView>
                </>
            )}
        </AnimatePresence>
    )
}

export default DetailView;
