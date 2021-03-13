import React from 'react';
import './PlayerCart.css'

const PlayerCart = (props) => {
    const selectedPlayers = props.selectedPlayers;
    console.log(selectedPlayers);
    const totalSalary = selectedPlayers.reduce((sum, selectedPlayers) =>sum + selectedPlayers.salary,0);
    
    return (
    
       <div className="player-cart">
       <h4 className="heading-text">Total Selected Player</h4>
           <table className="table table-stripped">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    </tr>
                </thead>
                {selectedPlayers.map(selected => 
                    <tbody>
                        <tr>
                            <td className="special-td">{selected.name}<span className="club-name">{selected.club}</span></td>
                            <td>{selected.salary}</td>
                        </tr>
                    </tbody>
                )}
            </table>
            <div className="total-salary">
                <h4>Total Salary = {totalSalary}</h4>
            </div>
       </div>

    );
};

export default PlayerCart;