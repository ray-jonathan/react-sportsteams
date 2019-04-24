import React from 'react'
import sports from './teams';

function SportType(props){
    const sportNames = Object.keys(sports);

    return(<>
        <h3>Sport Types:</h3>
        {sportNames.map(name => <button value={name} key={name} onClick={props.pickSport}>{name}</button>)}
    </>);
}


export default SportType;