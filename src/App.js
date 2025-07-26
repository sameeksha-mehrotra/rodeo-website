import logo from './RaasRodeo11V3.png';
import insta from './instagram icon logo.png';
import tiktok from './tiktok icon logo.png';
import Navbar from './Navbar';

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

            <a href="https://www.tiktok.com/@raasrodeo?is_from_webapp=1&sender_device=pc" target = "_blank" rel="noreferrer">
              <img className="App-tiktok" src={tiktok} alt="instagram logo" />
            </a>

            <a href="https://www.instagram.com/raasrodeo/?hl=en" target = "_blank" rel="noreferrer">
              <img src={insta} className="App-insta" alt="instagram logo" />
            </a>

          </div>

          {/*hamburger menu bar*/}
          <Navbar />

        </rectangle>
       </div>

       <rectangle className="App-extraRectangle">
       </rectangle>

      {/*Home Section*/}
       <div className="App-homeSection" id='home'>
        <h1>RAAS RODEO
           <h2>X V</h2>
        </h1>
      </div>

      

    </div>
  );
}


export default App;
