import React from 'react';


const Dashboard = props => {
    return (
        <div>
            <div>
                <button onClick={props.addStrike}>STRIKE</button>
                <button onClick={props.addBall}>BALL</button>
                <button>SINGLE</button>
                <button>DOUBLE</button>
                <button>TRIPLE</button>
                <button>HOME RUN</button>
                <button>OUT</button>
            </div>
        </div>
    );
};

export default Dashboard;