import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { setSearchField, requestRobots } from '../actions';

// Redux boilerplate necessity to map the state from the actions to the container props
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// Redux boilerplate contains the functions from the actions 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    // Checks after the component has been mounted on the DOM, rujns the function from the actions.js
    componentDidMount() {
        this.props.onRequestRobots();
    }

    //With redux it is no longer necessary to specify the state
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        // Destructure the props (store)
        const { searchField, onSearchChange, robots, isPending } = this.props;

        // Filter the robots depending on the searchfield and rerender accordingly
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // Check if the API has succeeded in its call, if not show Loading
        return isPending ?
        <h1> Loading </h1> :
        // Wrap the searchbox and cardlist in a scroll component
         (
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <Scroll>
                    <SearchBox searchChange={onSearchChange} />
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );

    }
}

// Connect used on container to connect to the store, can be used on any container to communicate the store (state) with any container
export default connect(mapStateToProps, mapDispatchToProps)(App);