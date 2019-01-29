import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
    margin: 5px;
    background: black;
    color: red;
    font-size: 2rem;
    width: 100px;
    :hover {
        background: red;
        color: black;
        cursor: pointer;
    }
`;

const Dashboard = props => {
    return (
        <div>
            <div>
                <SButton onClick={props.addStrike}>STRIKE</SButton>
                <SButton onClick={props.addBall}>BALL</SButton>
                <SButton onClick={props.addHit}>HIT</SButton>
                <SButton onClick={props.addOut}>OUT</SButton>
                <SButton onClick={props.addRun}>RUN</SButton>
                <SButton onClick={props.addError}>ERROR</SButton>
            </div>
        </div>
    );
};

export default Dashboard;