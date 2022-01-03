import React from 'react';
import { useDispatch } from "react-redux";
import { setSelectedRestaurant } from "../Store/restaurants";
import Grid from "@mui/material/Grid";
import styled from 'styled-components';



const ImageContainer = styled.div`
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  height: 180px;
  width: 80%;
  margin: auto;
  border-radius: 10px;
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



const RestaurantItem = props => {
   const dispatch = useDispatch();

   const {category, backgroundImageURL, setSideBar, name} = props;

   const handleDispatch = () => {
       dispatch(setSelectedRestaurant(name))
       setSideBar((sideBar) => !sideBar);
   }
    return (
        <Grid item xs={12} sm={6}>
            <ImageContainer backgroundImg={backgroundImageURL}
                            onClick={handleDispatch}>
                <InfoContainer>
                    <TitleComp>{name}</TitleComp>
                    <CategoryText>{category}</CategoryText>
                </InfoContainer>
            </ImageContainer>
        </Grid>
    )
}

export default RestaurantItem;
