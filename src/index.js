import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
// CSS for REACT
import 'tachyons';


//Logger is Middleware to log the actions in the console
const logger = createLogger();
// Rootreducer is a function from redux to combine multiple reducers in one for the store
const rootReducer = combineReducers({ searchRobots, requestRobots });
// Store contains the the connected state amongst the containers in order to avoid confusion with dealing with state and the implications from actions
// thunkMiddleware handles async calls to the API
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

//ReactDom renders the intial page. Provider contains the store (states)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
// Optimization
registerServiceWorker();
