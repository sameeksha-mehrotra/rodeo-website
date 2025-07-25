import logo from './RaasRodeo11V3.png';
import insta from './instagram icon logo.png';
import tiktok from './tiktok icon logo.png';

import './App.css';

function App() {
  return (
    <div className="App">

      {/*Top Page with Social Media Icons and black bar as the menue bar*/}
       <div className="App-topPage">
        
        <rectangle className="App-topPage-rectangle">
          <img src={logo} className="App-logo" alt="raas rodeo logo" />

          {/*Seperate div for socials to align to the right*/}
          <div className="App-socials"> 

            <img src={tiktok} className="App-tiktok" alt="instagram logo" />

            <img src={insta} className="App-insta" alt="instagram logo" />

          </div>

        </rectangle>
        
       </div>

      {/*Home Page*/}
       <div className="App-homePage">
        <h1>RAAS RODEO XV</h1>
      </div>

    </div>
  );
}


export default App;
