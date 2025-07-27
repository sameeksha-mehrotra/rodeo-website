import logo from './RaasRodeo11V3.png';
import insta from './instagram icon logo.png';
import tiktok from './tiktok icon logo.png';
import Navbar from './Navbar';
import tisha from './tishaPic.png';
import pavi from './paviPic.png';
import entireBoard from './entireBoard.png';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import headL from './headLiasons pic.png';


import './App.css';

function App() {
  return (
    <div className="App" id='home'>

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

        <rectangle className="App-extraRectangle">
        </rectangle>

       </div>

      {/*Home Section*/}
       <div className="App-homeSection">
        <h1>RAAS RODEO
           <h2>X V</h2>
        </h1>

        <div className="gotham-frame">
          <img className="App-entireBoard" src={entireBoard} alt="entire board" />
        </div>

      </div>

      {/*About Section*/}
      <div className="App-aboutSection" id='about'>
        <h1 class="aboutTitle">About Us</h1>
        <rectangle className="aboutSection-rectangle">
          <p>
            Raas Rodeo is a non-profit organization that aims to promote and celebrate the rich <b>cultural heritage</b> of Raas, a traditional Indian dance form. Our mission is to provide a platform for dancers and enthusiasts to come together, learn, and showcase their skills while fostering <b>a sense of community and cultural appreciation</b>.
          </p>
          <p>            We organize <b>workshops, performances, and events</b> that not only highlight the beauty of Raas but also educate people about its history and significance. Through our initiatives, we strive to create a vibrant community that<b>embraces diversity and encourages artistic expression</b>.
          </p>
          <p>            <b>Join us</b> in our journey to keep the spirit of Raas alive and thriving, as we bring together dancers, artists, and cultural enthusiasts from all walks of life. Whether you are a seasoned performer or someone new to the dance form, <b>Raas Rodeo welcomes you</b> to be a part of our community and celebrate the joy of Raas together.
          </p>
        </rectangle>  
      </div>

      {/*Directors Section*/}
      <div className="App-directorsSection" id='directors'>
        <h1 class="directorsTitle">Directors</h1>
        <img className="App-tishaImage" src={tisha} alt="tisha" />
        <img className="App-paviImage" src={pavi} alt="pavitra" />
      </div>

      {/*Board Section*/}
      <div className="App-boardSection" id='board'>
        <h1 className="boardTitle">Board</h1>

        <Carousel className="boardCarousel" showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={headL} alt="Head Liasons" />
            <p className="legend">cjebcfjsb</p>
          </div>
          {/* Add more <div> slides as needed */}
        </Carousel>
        
      </div>

      {/*Partnerships Section*/}
      <div className="App-partnerSection" id='partnerships'>
        <h1 class="partnerTitle">Partnerships</h1>
        <rectangle className="partnerSection-rectangle">
          <p>
            Raas Rodeo is a non-profit organization that aims to promote and celebrate the rich <b>cultural heritage</b> of Raas, a traditional Indian dance form. Our mission is to provide a platform for dancers and enthusiasts to come together, learn, and showcase their skills while fostering <b>a sense of community and cultural appreciation</b>.
          </p>
          <p>            We organize <b>workshops, performances, and events</b> that not only highlight the beauty of Raas but also educate people about its history and significance. Through our initiatives, we strive to create a vibrant community that<b>embraces diversity and encourages artistic expression</b>.
          </p>
          <p>            <b>Join us</b> in our journey to keep the spirit of Raas alive and thriving, as we bring together dancers, artists, and cultural enthusiasts from all walks of life. Whether you are a seasoned performer or someone new to the dance form, <b>Raas Rodeo welcomes you</b> to be a part of our community and celebrate the joy of Raas together.
          </p>
        </rectangle>  
      </div>

    </div>
  );
}


export default App;
