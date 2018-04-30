import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    //map to to create array of robots depending on result from the API call which then creates the store,
    // If the store is filtered with the searchbox this is rerendered accordingly
    const cardsArray = robots.map((user, i) => {
        return <Card key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email} />
    });

    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;