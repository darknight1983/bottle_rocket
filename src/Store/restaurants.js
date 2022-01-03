const initialState = {
    restaurants: [],
    selectedRestaurant: {}
};

export const GET_RESTAURANTS = "GET_RESTAURANTS";
export const SET_RESTAURANTS = "SET_RESTAURANTS";
export const GET_SELECTED_RESTAURANT = "GET_SELECTED_RESTAURANT";
export const SET_SELECTED_RESTAURANT = "SET_SELECTED_RESTAURANT";

export const getRestaurants = () => ({
    type: GET_RESTAURANTS
});

export const setRestaurants = restaurants => ({
    type: SET_RESTAURANTS,
    restaurants
});

export const getSelectedRestaurant = () => ({
    type: GET_SELECTED_RESTAURANT,
});

export const setSelectedRestaurant = name => ({
    type: SET_SELECTED_RESTAURANT,
    name
});

const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESTAURANTS:
            const {restaurants} = action;
            return {...state, restaurants};
        case GET_SELECTED_RESTAURANT:
            return { ...state  };
        case SET_SELECTED_RESTAURANT:
            const { name } = action;
            return { ...state, selectedRestaurant: state.restaurants.find(item => item.name === name)};
        default:
            return state;
    }
}

export default restaurantsReducer;
