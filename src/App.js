import logo from './RaasRodeo11V3.png';
import insta from './instagram icon logo.png';
import tiktok from './tiktok icon logo.png';
import youtube from './youtubeLogo.png';
import Navbar from './Navbar';
import tisha from './tishaPic.png';
import pavi from './paviPic.png';
import collage from './collage.png';
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
import raasTitle from './raasTitleFont.png';
import './App.css';
import MediaPage from './MediaPage';
import ApplicationsPage from './ApplicationsPage';
import React, { useState, useEffect, useRef } from 'react';

// Custom hook for fade-in on scroll
function useFadeInOnScroll(activeTab) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reset the visible class when tab changes
    element.classList.remove('fade-in-visible');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Small delay to ensure the reset takes effect before observing
    const timeoutId = setTimeout(() => {
      observer.observe(element);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.unobserve(element);
    };
  }, [activeTab]);

  return ref;
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [animationKey, setAnimationKey] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const aboutRef = useFadeInOnScroll(activeTab);
  const directorsRef = useFadeInOnScroll(activeTab);
  const boardRef = useFadeInOnScroll(activeTab);

  // Reset animation when clicking home
  const handleHomeClick = () => {
    setActiveTab('home');
    setShowAnimation(true);
    setAnimationKey(prev => prev + 1);
  };

  // Hide animation after it completes
  useEffect(() => {
    if (showAnimation && activeTab === 'home') {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 2500); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [showAnimation, activeTab, animationKey]);

  return (
    <div className="App" id='home'>
      {/* Header with Logo, Socials, and Navigation */}
      <header className="App-header">
        <div className="App-header-content">
          <a href="#home" onClick={handleHomeClick} className="App-logo-link">
            <img src={logo} className="App-logo" alt="raas rodeo logo" />
          </a>

          <div className="App-header-right">
            <div className="App-socials">
              <a href="https://youtube.com/@raasrodeo?si=Qh7CynLfI_feggNU" target="_blank" rel="noreferrer" className="social-link">
                <img className="App-youtube" src={youtube} alt="youtube" />
              </a>
              <a href="https://www.tiktok.com/@raasrodeo?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="social-link">
                <img className="App-tiktok" src={tiktok} alt="tiktok" />
              </a>
              <a href="https://www.instagram.com/raasrodeo/?hl=en" target="_blank" rel="noreferrer" className="social-link">
                <img src={insta} className="App-insta" alt="instagram" />
              </a>
            </div>
            <div className="header-divider"></div>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onHomeClick={handleHomeClick}/>
          </div>
        </div>
        <div className="App-header-accent"></div>
      </header>

      {/* Main Content */}
      <main className="App-main">
        {activeTab === 'media' ? (
          <MediaPage />
        ) : activeTab === 'application' ? (
          <ApplicationsPage />
        ) : (
          <>
            {/* Hero Section */}
            <section className="App-hero" id="home-content" style={{ backgroundImage: `url(${collage})` }}>
              {showAnimation && (
                <div className="hero-animation-overlay" key={`overlay-${animationKey}`}></div>
              )}
              <div className="hero-content">
                {showAnimation && (
                  <div className="bat-animation-container" key={animationKey}>
                    <h1 className="hero-title">RAAS RODEO</h1>
                  </div>
                )}
              </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} className="App-section App-aboutSection fade-in-left" id="about">
              <div className="section-header">
                <h2 className="section-title">About Us</h2>
                <div className="section-title-line"></div>
              </div>
              <div className="about-content">
                <p>
                  Raas Rodeo is a non-profit organization that aims to promote and celebrate the rich <strong>cultural heritage</strong> of Raas, a traditional Indian dance form. Our mission is to provide a platform for dancers and enthusiasts to come together, learn, and showcase their skills while fostering <strong>a sense of community and cultural appreciation</strong>.
                </p>
                <p>
                  We organize <strong>workshops, performances, and events</strong> that not only highlight the beauty of Raas but also educate people about its history and significance. Through our initiatives, we strive to create a vibrant community that <strong>embraces diversity and encourages artistic expression</strong>.
                </p>
                <p>
                  <strong>Join us</strong> in our journey to keep the spirit of Raas alive and thriving, as we bring together dancers, artists, and cultural enthusiasts from all walks of life. Whether you are a seasoned performer or someone new to the dance form, <strong>Raas Rodeo welcomes you</strong> to be a part of our community and celebrate the joy of Raas together.
                </p>
              </div>
            </section>

            {/* Directors Section */}
            <section ref={directorsRef} className="App-section App-directorsSection fade-in-right" id="directors">
              <div className="section-header">
                <h2 className="section-title">Directors</h2>
                <div className="section-title-line"></div>
              </div>
              <div className="directors-grid">
                <div className="director-card">
                  <div className="director-image-wrapper">
                    <img className="director-image" src={pavi} alt="Pavitra Sugatan"/>
                  </div>
                  <div className="director-info">
                    <h3 className="director-name">Pavitra Sugatan</h3>
                    <p className="director-email">pavitrasugatan@raasrodeo.com</p>
                  </div>
                </div>
                <div className="director-card">
                  <div className="director-image-wrapper">
                    <img className="director-image" src={tisha} alt="Tisha Chhatbar"/>
                  </div>
                  <div className="director-info">
                    <h3 className="director-name">Tisha Chhatbar</h3>
                    <p className="director-email">tishachhatbar@raasrodeo.com</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Board Section */}
            <section ref={boardRef} className="App-section App-boardSection fade-in-left" id="board">
              <div className="section-header">
                <h2 className="section-title">Board</h2>
                <div className="section-title-line"></div>
              </div>
              <div className="board-carousel-container">
                <Carousel className="boardCarousel" showThumbs={false} infiniteLoop autoPlay interval={6000} showStatus={false}>
                  <div className="carousel-slide">
                    <img src={headL} alt="Head Liaisons" />
                    <p className="legend">Savitha Shanmugasundaram, Miloni Patel, Akash Gupta</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={jo} alt="Judging and Outreach" />
                    <p className="legend">Vivek Patel, Simali Shah</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={social} alt="Social" />
                    <p className="legend">Uma Kamath, Roshan Ahmed</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={finance} alt="Finance" />
                    <p className="legend">Netra Bhargava, Akhil Morusupalli, Meena Ramaswamy</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={show} alt="Show" />
                    <p className="legend">Eshan Mehdiratta, Anika Koppula</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={logistics} alt="Logistics" />
                    <p className="legend">Diya Patel, Aditya Yadav, Ashley Kurian</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={hospitality} alt="Hospitality" />
                    <p className="legend">Amolika Kondapalli, Anirudh Radhakrishnan</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={pr} alt="Public Relations" />
                    <p className="legend">Nishita Appana, Tanisha Khurana</p>
                  </div>
                  <div className="carousel-slide">
                    <img src={creative} alt="Creative" />
                    <p className="legend">Akshitha Venkataraman, Srimukta Pisupati, Sameeksha Mehrotra</p>
                  </div>
                </Carousel>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <div className="footer-content">
          <p className="footer-brand">Raas Rodeo XV</p>
          <p className="footer-copyright">&copy; 2025 Raas Rodeo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
