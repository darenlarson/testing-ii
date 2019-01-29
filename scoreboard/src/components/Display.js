import React from 'react';


const Display = props => {
    return (
        <div>
            <div>
                <h3>Strikes:</h3>
                <div data-testid="strike-count">{props.strikes}</div>
            </div>
            <div>
                <h3>Balls:</h3>
                <div data-testid="ball-count">{props.balls}</div>
            </div>
        </div>
    );
};

export default Display;