import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
    margin: 50px;
    background: grey;
    width: 250px;
`;
const SPitchCount = styled.div`
    display: flex;
    justify-content: center;
`;
const SCount = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const SScoreboard = styled.div`
    display: flex;
    justify-content: center;
    div {
        margin: 5px;
    }
`;
const SColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        /* border: 1px solid black; */
        /* width: 100%;
        height: 100%; */
        text-align: center;
    }
`;
const SDataPoint = styled.div`
    background: black;
    color: red;
    font-size: 2.5rem;
    line-height: 1.2;
    padding: 2px 5px;
`;
const SInning = styled.div`
    background: black;
    color: red;
    font-size: 1.6rem;
    line-height: 1.2;
`;

const Display = props => {
    return (
        <SContainer>
            <SPitchCount>
                <SCount>
                    <h3>Inning</h3>
                    <SInning>{props.topInning === true ? 'TOP' : 'BOTTOM'} {props.inning}</SInning>
                </SCount>
                <SCount>
                    <h3>Balls</h3>
                    <SDataPoint data-testid="ball-count">{props.balls}</SDataPoint>
                </SCount>
                <SCount>
                    <h3>Strikes</h3>
                    <SDataPoint data-testid="strike-count">{props.strikes}</SDataPoint>
                </SCount>
                <SCount>
                    <h3>Outs</h3>
                    <SDataPoint>{props.outs}</SDataPoint>
                </SCount>
            </SPitchCount>

            <SScoreboard>
                <SColumn>
                    <div>Teams</div>
                    <div>Home</div>
                    <div>Away</div>
                </SColumn>
                <SColumn>
                    <div>Runs</div>
                    <SDataPoint>{props.totalScoreHome}</SDataPoint>
                    <SDataPoint>{props.totalScoreAway}</SDataPoint>
                </SColumn>
                <SColumn>
                    <div>Hits</div>
                    <SDataPoint>{props.hitsHome}</SDataPoint>
                    <SDataPoint>{props.hitsAway}</SDataPoint>
                </SColumn>
                <SColumn>
                    <div>Errors</div>
                    <SDataPoint>{props.errorsHome}</SDataPoint>
                    <SDataPoint>{props.errorsAway}</SDataPoint>
                </SColumn>
            </SScoreboard>
        </SContainer>
    );
};

export default Display;