import React from 'react';
import './App.css'; 

import raasAM from './wreckinRaas_TeamLogo.PNG';
import washRaas from './washURaasLogo.png';
import uwRaas from './uWRaasLogo.png';

function MediaPage() {
  return (
    <div className="App-mediaSection" id="media">
    {/* Media Page Title */}
      <h1 className="mediaTitle">Media</h1>
    
    {/* Teams Content */}
        <div className="teamsLeft">

          <div className="teamFrame">
            <img className="teamImage" src={raasAM} alt="Team 3"/>
            <div className="overlay">
              <span className="overlayText">Team 3</span>
            </div>
          </div>

          <div className="teamFrame">
            <img className="teamImage" src={washRaas} alt="Team 4"/>
            <div className="overlay">
              <span className="overlayText">Team 4</span>
            </div>
          </div>

          <div className="teamFrameFive">
            <img className="teamImage" src={uwRaas} alt="Team 5"/>
            <div className="overlay">
              <span className="overlayText">Team 5</span>
            </div>
          </div>

        </div>
    </div>
  );
}

export default MediaPage;