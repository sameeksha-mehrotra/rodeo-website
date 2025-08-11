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

          <div className="teamFrameOther">
            <img className="teamImage" src={gtRaas} alt="First Place" onClick={() => window.open('https://youtu.be/BVLQoistZlQ?si=zdj55TL_Z-_bbHIH', '_blank')}/>
            <span className="overlayText">First Place</span>
            <span className="overlayTextName"> <br/> Georgia Tech</span>
          </div>

          <div className="teamFrame">
            <img className="teamImage" src={taraas} alt="Second Place" onClick={() => window.open('https://youtu.be/aQQ4JB4apHk?si=583LOQBUinVUeoc9', '_blank')}/>
            <span className="overlayText">Second Place</span>
            <span className="overlayTextName"><br/>University of Texas at Dallas</span>
          </div>

          <div className="teamFrame">
            <img className="teamImage" src={ucbRaas} alt="Third Place" onClick={() => window.open('https://youtu.be/uVIZPXv-hsI?si=i6_PyxDnKoTB9vEW', '_blank')}/>
            <span className="overlayText">Third Place</span>
            <span className="overlayTextName"><br/>UC Berkeley</span>
          </div>
        </div>

        <div className="teamsLeft">

          <div className="teamFrame">
            <img className="teamImage" src={raasAM} alt="Team 4" onClick={() => window.open('https://www.youtube.com/watch?v=47rsMTNm95U&t=40s', '_blank')}/>
            <span className="overlayText">Team 4</span>
            <span className="overlayTextName"><br/>Texas A&M</span>
          </div>

          <div className="teamFrame">
            <img className="teamImage" src={washRaas} alt="Team 5" onClick={() => window.open('https://youtu.be/ef5TEpz37Dg?si=UzKE8fWIxaJ9cdzS', '_blank')}/>
            <span className="overlayText">Team 5</span>
            <span className="overlayTextName"><br/>Washington University</span>
          </div>

          <div className="teamFrame">
            <img className="teamImage" src={uwRaas} alt="Team 6" onClick={() => window.open('https://youtu.be/9h78dRldiAQ?si=itSCPGE23od9lUTY', '_blank')}/>
            <span className="overlayText">Team 6</span>
            <span className="overlayTextName"><br/>University of Washington</span>
          </div>

        </div>

        <div className="teamsRight">

          <div className="teamFrame">
            <img className="teamImage" src={steelRaas} alt="Team 7" onClick={() => window.open('https://youtu.be/p3WNR5G1nW0?si=vf1iTF25-7zKfiVL', '_blank')}/>
             <span className="overlayText">Team 7</span>
            <span className="overlayTextName"><br/>University of Pittsburgh</span>
          </div>

          <div className="teamFrameOtherC">
            <img className="teamImage" src={columbiaRaas} alt="Team 8" onClick={() => window.open('https://youtu.be/XEpvkG6oLJ0?si=JYbemU5Gy3u3FT2D', '_blank')}/>
            <span className="overlayText">Team 8</span>
            <span className="overlayTextName"><br/>Columbia University</span>
          </div>

        </div>

    </div>
  );
}

export default MediaPage;