import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
    searchField: ''
}

// The object assign creates the empty object which is then populated with the initialstate and depending on the searchbox is then populated into searchfield inside this function
export const searchRobots = (state = initialStateSearch
    , action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

// Initial state that is initialized in reducers, different actions have different states
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

// Depending on action supplied send different information to the store which then communicates with the app
export const requestRobots = (state = initialStateRobots
    , action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}