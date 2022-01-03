import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects'
import restaurantsReducer from "./restaurants";
import { setRestaurants, getRestaurants, GET_RESTAURANTS } from "./restaurants";




const sagaMiddleware = createSagaMiddleware();

const store = createStore(restaurantsReducer, applyMiddleware(sagaMiddleware));

const requestGetRestaurants = () => {
    return axios.request({
        method: 'get',
        url: "https://s3.amazonaws.com/br-codingexams/restaurants.json"
    });
}

const handleGetRestaurants = function*(action) {
    try {
        const response = yield call(requestGetRestaurants);
        const { restaurants } = response.data;
        yield put(setRestaurants(restaurants));
    } catch(error) {
        console.log(error);
    }
}

const watcherSaga = function*() {
    yield takeLatest(GET_RESTAURANTS, handleGetRestaurants)
}

sagaMiddleware.run(watcherSaga);

export default store;
