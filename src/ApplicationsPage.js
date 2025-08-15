import React from 'react';
import './App.css';

function ApplicationsPage() {
  return (
    <div className="App-appSection" id="application">
    {/* Important Links Title */}
      <h1 className="appTitle">Important Links</h1>

      <div className="App-appLinks">

        <a href="https://linktr.ee/raasrodeo?utm_source=linktree_profile_share&ltsid=60721a6b-13c5-4bc1-8cec-c2173c19cd9c" target="_blank" rel="noreferrer">
          <button className="App-appLinkButton"> Raas Rodeo Linktree </button>
        </a>

        <a href="https://tr.ee/U7Tgn9tfZB" target="_blank" rel="noreferrer">
          <button className="App-appLinkButton"> Misconduct Reporting Form </button>
        </a>

        <h2 className="linksTitle"> Photos </h2>
         <a href="https://tr.ee/OrloZb_uWq" target="_blank" rel="noreferrer">
           <button className="App-appLinkButton"> 2024-2025 Mixer + Show </button>
        </a>

        <h2 className="linksTitle"> Videos </h2>
        <a href="https://www.youtube.com/playlist?list=PLMt_qHGmLXelcodV0jqXziLHZOXW72tUU" target="_blank" rel="noreferrer">
          <button className="App-appLinkButtonLast"> 2025 Show YouTube Playlist</button>
        </a>

      </div>

      
    </div>
  );
}

export default ApplicationsPage;