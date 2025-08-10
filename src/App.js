import logo from './RaasRodeo11V3.png';
import insta from './instagram icon logo.png';
import tiktok from './tiktok icon logo.png';
import youtube from './youtubeLogo.png';
import lineDivider from './lineDivider.png';
import Navbar from './Navbar';
import tisha from './tishaPic.png';
import pavi from './paviPic.png';
import entireBoard from './entireBoard.png';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import headL from './headLiasons pic.png';
import jo from './j&o pic.png';
import social from './social Pic.png';
import finance from './finance Pic.png';
import show from './show pic.png';
import logistics from './logistics Pic.png';
import hospitality from './hospitality Pic.png';
import pr from './pr Pic.png';
import creative from './creative Pic.png';

import partnerPlace from './partner placeholder.png';
import partnerPlace2 from './partner placeholder2.png';

import raasTitle from './raasTitleFont.png';

import './App.css';
import MediaPage from './MediaPage';
import ApplicationsPage from './ApplicationsPage';

import sectionDivider from './horizontalLine.png';

import React, { useState } from 'react';

function App() {

  const [activeTab, setActiveTab] = useState('home');

  return (
  <div className="App" id='home'>
    {/*Top Page with Social Media Icons and black bar as the menu bar*/}
    <div className="App-topPage">
      <rectangle className="App-topPage-rectangle">
        <a href="#home" onClick={() => setActiveTab('home')}>
          <img src={logo} className="App-logo" alt="raas rodeo logo" />
        </a>
        <div className="App-socials">
          <a href="https://youtube.com/@raasrodeo?si=Qh7CynLfI_feggNU" target="_blank" rel="noreferrer">
            <img className="App-youtube" src={youtube} alt="youtube logo" />
          </a>
          <a href="https://www.tiktok.com/@raasrodeo?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">
            <img className="App-tiktok" src={tiktok} alt="instagram logo" />
          </a>
          <a href="https://www.instagram.com/raasrodeo/?hl=en" target="_blank" rel="noreferrer">
            <img src={insta} className="App-insta" alt="instagram logo" />
          </a>
        </div>

        <div>
          <img className="lineDivider" src={lineDivider} alt = "line logo"></img>
        </div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      </rectangle>
      <rectangle className="App-extraRectangle"></rectangle>
    </div>

    {/* Only show MediaPage if activeTab is 'media' */}
    {activeTab === 'media' ? (
      <MediaPage />
    ) : activeTab === 'application' ? (
      <ApplicationsPage />
    ) : (
      <>
        {/*Home Section*/}
        <div className="App-homeSection">
          <img className="App-raasTitle" src={raasTitle} alt="raas title" />

          <div className="gotham-frame">
            <img className="App-entireBoard" src={entireBoard} alt="entire board" />
          </div>

        </div>

        {/*Divider between Sections*/}
        <img src={sectionDivider} className="App-horizontalLine" alt="horizontal line divider" id='about'/>

        {/*About Section*/}
        <div className="App-aboutSection">
          <h1 className="aboutTitle">About Us</h1>
          <rectangle className="aboutSection-rectangle">
            <p>
              Raas Rodeo is a non-profit organization that aims to promote and celebrate the rich <b>cultural heritage</b> of Raas, a traditional Indian dance form. Our mission is to provide a platform for dancers and enthusiasts to come together, learn, and showcase their skills while fostering <b>a sense of community and cultural appreciation</b>.
            </p>
            <p>
              We organize <b>workshops, performances, and events</b> that not only highlight the beauty of Raas but also educate people about its history and significance. Through our initiatives, we strive to create a vibrant community that <b>embraces diversity and encourages artistic expression</b>.
            </p>
            <p>
              <b>Join us</b> in our journey to keep the spirit of Raas alive and thriving, as we bring together dancers, artists, and cultural enthusiasts from all walks of life. Whether you are a seasoned performer or someone new to the dance form, <b>Raas Rodeo welcomes you</b> to be a part of our community and celebrate the joy of Raas together.
            </p>
          </rectangle>
        </div>

        {/*Divider between Sections*/}
        <img src={sectionDivider} className="App-horizontalLine" alt="horizontal line divider" id='directors'/>

        {/*Directors Section*/}
        <div className="App-directorsSection">
          <h1 className="directorsTitle">Directors</h1>

          <div className="directorsSection">
            
            <div className="tishSection"> 
              <img className="App-tishaImage" src={tisha} alt="tisha"/>
              <h2 className="directorName">Tisha Chhatbar</h2>
            </div>

            <div className="paviSection">
              <img className="App-paviImage" src={pavi} alt="pavi"/>
              <h2 className="directorName">Pavitra Sugatan</h2>
            </div>

          </div>

        </div>

        {/*Divider between Sections*/}
        <img src={sectionDivider} className="App-horizontalLine" alt="horizontal line divider" id='board'/>

        {/*Board Section*/}
        <div className="App-boardSection">
          <h1 className="boardTitle">Board</h1>
          <div className="gotham-frameBoard">
            <Carousel className="boardCarousel" showThumbs={false} infiniteLoop autoPlay interval={6000}>
              <div>
                <img src={headL} alt="Head Liasons" />
                <p className="legend">Savitha Shanmugasundaram, Miloni Patel, Akash Gupta</p>
              </div>
              <div>
                <img src={jo} alt="Judging and Outreach" />
                <p className="legend">Vivek Patel, Simali Shah</p>
              </div>
              <div>
                <img src={social} alt="Social" />
                <p className="legend">Uma Kamath, Roshan Ahmed</p>
              </div>
              <div>
                <img src={finance} alt="Finance" />
                <p className="legend">Netra Bhargava, Akhil Morusupalli, Meena Ramaswamy</p>
              </div>
              <div>
                <img src={show} alt="Show" />
                <p className="legend">Eshan Mehdiratta, Anika Koppula</p>
              </div>
              <div>
                <img src={logistics} alt="Logistics" />
                <p className="legend">Diya Patel, Aditya Yadav, Ashley Kurian</p>
              </div>
              <div>
                <img src={hospitality} alt="Hospitality" />
                <p className="legend">Amolika Kondapalli, Anirudh Radhakrishnan</p>
              </div>
              <div>
                <img src={pr} alt="Public Relations" />
                <p className="legend">Nishita Appana, Tanisha Khurana</p>
              </div>
              <div>
                <img src={creative} alt="Creative" />
                <p className="legend">Akshitha Venkataraman, Srimukta Pisupati, Sameeksha Mehrotra</p>
              </div>
            </Carousel>
          </div>
        </div>

        {/*Divider between Sections*/}
        <img src={sectionDivider} className="App-horizontalLine" alt="horizontal line divider" id='partnerships'/>

        {/*Partnerships Section*/}
        <div className="App-partnerSection">
          <h1 className="partnerTitle">Partnerships</h1>
          <div className="partnerSection">
            <a href="https://www.instagram.com/reel/DL8ZL0_ulE5/?utm_source=ig_web_copy_link&igsh=dzByNWNkc2M4aWRu" target="_blank" rel="noreferrer">
              <img className="partnerPlace" src={partnerPlace} alt="partner placeholder" />
            </a>
            <a href="https://www.instagram.com/reel/DL8ZL0_ulE5/?utm_source=ig_web_copy_link&igsh=dzByNWNkc2M4aWRu" target="_blank" rel="noreferrer">
              <img className="partnerPlace" src={partnerPlace2} alt="partner placeholder 2" />
            </a>
          </div>
        </div>
      </>
    )}
  </div>
  );
}

export default App;