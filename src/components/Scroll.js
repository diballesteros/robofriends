import React from 'react';

const Scroll = (props) => {
    //keep in mind the style must use camelcase
    // Scroll box to make it more responsive, and the searchbox is visible at all times
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;












