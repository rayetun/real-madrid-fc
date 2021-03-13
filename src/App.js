import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import playerData from './playerData/index.json';
import { useEffect } from 'react';
import { useState } from 'react';
import Player from './components/Players/Player';
import PlayerCart from './components/PlayerCart/PlayerCart';
import Header from './components/Header/Header';

function App() {
  const [players, setPlayer] = useState([]);
  const [selectedPlayers, setSelectedPlayer] = useState([]);
  
  useEffect(() =>{
    setPlayer(playerData);
  }, [])

  const handleAddPlayer = (salary) => {
    const newSelected = [...selectedPlayers,salary];
    setSelectedPlayer(newSelected)
  }
 

  return (
    <div className="container club-area">
      <Header></Header>
      <div className="row">
        <div className="col-md-9">
            <div className="row">
                {players.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Player>)}
            </div>
        </div>
        <div className="col-md-3">
                <PlayerCart selectedPlayers={selectedPlayers}></PlayerCart>
        </div>
      </div>
    </div>
  );
}

export default App;
