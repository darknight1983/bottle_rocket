import React from 'react';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import AppBar from '../Components/AppBar'
import Footer from "../Components/Footer";
import RestaurantItem from "../Components/restaurantItem";



const ListView = ({ sideBar = false, setSideBar = () => {} }) => {
    const allRestaurants = useSelector(state => state.restaurants);

    return (
        <motion.div
            animate={{
                scale: sideBar ? 0.9 : 1,
                opacity: sideBar ? 0.5 : 1
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AppBar sideBar={sideBar} setSideBar={setSideBar}/>
                    </Grid>
                        { allRestaurants.map(item => <RestaurantItem key={item.name} {...{sideBar, setSideBar, ...item}}/>)}
                </Grid>
            </div>
        </motion.div>
    )
}

export default ListView;
