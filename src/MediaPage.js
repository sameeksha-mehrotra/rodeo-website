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
    <div className="App-mediaSection" id = 'media'>
    {/* Media Page Title */}
      <h1 className="mediaTitle">Media</h1>
    
      {/* Teams Content */}

        <div className="teamsCenter">

          <div className="teamFramePlacementFirst">
            <img className="teamImage" src={gtRaas} alt="First Place" onClick={() => window.open('https://youtu.be/BVLQoistZlQ?si=zdj55TL_Z-_bbHIH', '_blank')}/>
            <div className="overlay">
              <span className="overlayText">First Place</span>
              <span className="overlayTextName">Georgia Tech Ramblin' Raas</span>
            </div>
          </div>

          <div className="teamFramePlacement">
            <img className="teamImage" src={taraas} alt="Second Place" onClick={() => window.open('https://youtu.be/aQQ4JB4apHk?si=583LOQBUinVUeoc9', '_blank')}/>
            <div className="overlay">
              <span className="overlayText">Second Place</span>
              <span className="overlayTextName">University of Texas at Dallas TaRaas</span>
            </div>
          </div>

          <div className="teamFrameFive">
            <img className="teamImage" src={ucbRaas} alt="Third Place" onClick={() => window.open('https://youtu.be/uVIZPXv-hsI?si=i6_PyxDnKoTB9vEW', '_blank')}/>
            <div className="overlay">
              <span className="overlayText">Third Place</span>
              <span className="overlayTextName">UC Berkeley Raas Ramzat</span>
            </div>
          </div>

        </div>

        <div className="teamsLeft">

          <div className="teamFrame">
            <a href="https://www.youtube.com/watch?v=47rsMTNm95U&t=40s" target="_blank" rel="noreferrer"> 
              <img className="teamImage" src={raasAM} alt="Team 4"/>
            </a>
            <div className="overlay">
              <span className="overlayText">Team 4</span>
              <span className="overlayTextName">Texas A&M Wreckin' Raas</span>
            </div>
          </div>

          <div className="teamFrame">
            <img className="teamImage" src={washRaas} alt="Team 5" onClick={() => window.open('https://youtu.be/ef5TEpz37Dg?si=UzKE8fWIxaJ9cdzS', '_blank')}/>
            <div className="overlay">
              <span className="overlayText">Team 5</span>
              <span className="overlayTextName">Washington University Raas</span>
            </div>
          </div>

          <div className="teamFrameFive">
            <img className="teamImage" src={uwRaas} alt="Team 6" onClick={() => window.open('https://youtu.be/9h78dRldiAQ?si=itSCPGE23od9lUTY', '_blank')}/>
            <div className="overlay">
              <span className="overlayText">Team 6</span>
              <span className="overlayTextName">University of Washington Raas</span>
            </div>
          </div>

        </div>

        <div className="teamsRight">

          <div className="teamFrame">
            <img className="teamImage" src={steelRaas} alt="Team 7" onClick={() => window.open('https://youtu.be/p3WNR5G1nW0?si=vf1iTF25-7zKfiVL', '_blank')}/>
            <div className="overlay">
              <span className="overlayTextSteelNum">Team 7</span>
              <span className="overlayTextNameSteel">University of Pittsburgh</span>
               <span className="overlayTextNameSteel">Steel City Raas</span>
            </div>
          </div>

          <div className="teamFrameFive">
            <img className="teamImage" src={columbiaRaas} alt="Team 8" onClick={() => window.open('https://youtu.be/XEpvkG6oLJ0?si=JYbemU5Gy3u3FT2D', '_blank')}/>
            <div className="overlay">
              <span className="overlayText">Team 8</span>
              <span className="overlayTextName">Columbia University Raas</span>
            </div>
          </div>

        </div>

    </div>
  );
}

export default MediaPage;