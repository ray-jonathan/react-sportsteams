import React from 'react';
import teams from './teams';

function TeamRosters(props){
    const roster = (teams[props.theSport][props.theTeam]);

    return(<>
        <h3>Roster: </h3>
        {roster.map(name => <h5 key={name}>{name}</h5>)}
    </>);
}

export default TeamRosters;