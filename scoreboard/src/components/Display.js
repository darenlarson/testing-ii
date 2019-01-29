import React from 'react';


const Display = props => {
    return (
        <div>
            <div>
                <h3>Strikes:</h3>
                <div>{props.strikes}</div>
            </div>
            <div>
                <h3>Balls:</h3>
                <div>{props.balls}</div>
            </div>
        </div>
    );
};

export default Display;