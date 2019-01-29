import React from 'react';


const Dashboard = props => {
    return (
        <div>
            <div>
                <button onClick={props.addStrike}>STRIKE</button>
                <button onClick={props.addBall}>BALL</button>
                <button>HIT</button>
                <button>OUT</button>
            </div>
        </div>
    );
};

export default Dashboard;