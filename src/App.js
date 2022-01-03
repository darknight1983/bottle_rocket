import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import styled from 'styled-components'
import ListDetailViewWrapper from "./Views/ListDetailViewWrapper";

import {getRestaurants} from "./Store/restaurants";


const StyledApp = styled.div`
  text-align: center;
  width: 100%;
`

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

    return (
        <StyledApp className="App">
            <ListDetailViewWrapper/>
        </StyledApp>
    );
}

export default App;
