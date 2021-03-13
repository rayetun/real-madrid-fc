import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {image,country,salary,name,club} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
    <div className="col-md-4">
        <div className="player-info">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-5">
                    <img src={image} className="card-img" alt={name}></img>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h6 className="card-title">{name}</h6>
                            <p className="card-text"><small>Club: {club}</small></p>
                            <p className="card-text"><small>Country: {country}</small></p>
                            <p className="card-text salary-text">Salary: €{salary}</p>
                            <button onClick={() => handleAddPlayer(props.player)} className="btn btn-primary btn-lg btn-block"><FontAwesomeIcon icon={faShoppingCart} /> Buy Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Player;