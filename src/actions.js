import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

// type is decided in constant.js, text in this case refers to the text inside the searchbox
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

//API Call, depending on result different return
// Higher order function, this would not ordinarily work with just redux
// Reduxthunk is necesary in order to accept functions, async API call
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}