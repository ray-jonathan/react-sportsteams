import React from 'react';
import teams from './teams';

function SportsTeams(props){
    const teamNames = Object.keys(teams[props.theSport]);

    return(<>
        <h3>Teams: </h3>
        {teamNames.map((name, i) => <button onClick={props.pickTeam} value={name} key={i}>{name}</button>)}
    
    
    </>);
}

export default SportsTeams;