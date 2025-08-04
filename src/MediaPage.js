import React from 'react';
import './App.css'; 

import raasAM from './wreckinRaas_TeamLogo.PNG';
import washRaas from './washURaasLogo.png';
import uwRaas from './uWRaasLogo.png';
import ucbRaas from './UCBLogo.png';
import steelRaas from './steelCityRaas.png';
import columbiaRaas from './columbiaRaasLogo.png';
import gtRaas from './GTRR-Logo.jpeg';
import taraas from './tarassLogo.png';

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

        <div className="teamsRight">

          <div className="teamFrameFive">
            <img className="teamImage" src={ucbRaas} alt="Team 6"/>
            <div className="overlay">
              <span className="overlayText">Team 6</span>
            </div>
          </div>

          <div className="teamFrame">
            <img className="teamImage" src={steelRaas} alt="Team 7"/>
            <div className="overlay">
              <span className="overlayText">Team 7</span>
            </div>
          </div>

          <div className="teamFrameFive">
            <img className="teamImage" src={columbiaRaas} alt="Team 8"/>
            <div className="overlay">
              <span className="overlayText">Team 8</span>
            </div>
          </div>

        </div>

        <div className="teamsCenter">

          <div className="teamFramePlacementFirst">
            <img className="teamImage" src={gtRaas} alt="First Place"/>
            <div className="overlay">
              <span className="overlayText">First Place</span>
            </div>
          </div>

          <div className="teamFramePlacement">
            <img className="teamImage" src={taraas} alt="Second Place"/>
            <div className="overlay">
              <span className="overlayText">Second Place</span>
            </div>
          </div>

        </div>

    </div>
  );
}

export default MediaPage;