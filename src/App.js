import React from 'react';
import SportType from './SportType';
import SportsTeams from './SportsTeams';
import TeamRosters from './TeamRosters';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chosenSport: '',
      chosenTeam: ''
    }

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SportType pickSport={this._sportHandler}/>
          {this.state.chosenSport? <SportsTeams pickTeam={this._teamHandler} theSport={this.state.chosenSport} /> : <></>}
          {this.state.chosenTeam? <TeamRosters theTeam={this.state.chosenTeam} theSport={this.state.chosenSport} /> : <></>}
        </header>
      </div>
    );
  }

  _sportHandler = (e) => {
    this.setState({
      chosenSport: e.target.value,
      chosenTeam: ''
    })
  }

  _teamHandler = (e) => {
    this.setState({
      chosenTeam: e.target.value
    })
  }
}

export default App;
