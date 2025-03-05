"use client"
import { useState } from "react";

import Rain from "./components/Rain";

export default function Home() {
  const [isTitleClicked, setIsTitleClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showRain, setShowRain] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");
  
  const handleTitleClick = () => {
    setIsTitleClicked(true);
    
    // Slightly delayed rain effect to create a smooth transition
    setTimeout(() => {
      setShowRain(true);
    }, 300);
    
    // Delayed content reveal
    setTimeout(() => {
      setShowContent(true);
    }, 1500); // Match the title fade-out duration
  };

  const handleSectionChange = (section: "welcome" | "projects" | "about") => {
    setActiveSection(section);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="gradient-bg min-h-screen flex flex-col items-center justify-center">
      {showRain && <Rain count={300} speed={3} fadeInDuration={2000} />}
      
      <div className="content-container flex flex-col items-center justify-center w-full relative" style={{ height: '100vh' }}>
        
        {/* Title Header */}
        <header 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full ${isTitleClicked ? 'pointer-events-none' : 'pointer-events-auto'}`}
          style={{ 
            transition: 'opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
            opacity: isTitleClicked ? 0 : 1
          }}
        >
          <button 
            className="bg-transparent border-none outline-none w-full" 
            onClick={handleTitleClick}
            aria-label="Click kona title"
          >
            <h1 
              className={`chakra-title text-white mx-auto ${isTitleClicked ? 'title-moved' : ''}`}
            >
              kona
            </h1>
            <p className="entry-subtitle">click me to enter</p>
          </button>
        </header>
        
        {/* Welcome Section */}
        <section className={`content-section ${showContent && activeSection === "welcome" ? 'visible' : 'hidden'}`}>
          <h2 className="welcome-title">welcome</h2>
          <p className="welcome-subtitle">kona <span className="separator">•</span> martin</p>
          
          {/* Glass Buttons */}
          <div className="button-container">
            <button 
              className="glass-button" 
              onClick={() => handleSectionChange("projects")}
            >
              projects
            </button>
            <button 
              className="glass-button" 
              onClick={() => handleSectionChange("about")}
            >
              about
            </button>
          </div>
          
          {/* Social Media Buttons */}
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/martin-margolin/" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.47V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a href="mailto:martin.m.margolin@gmail.com" className="social-button" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`content-section projects-section ${showContent && activeSection === "projects" ? 'visible' : 'hidden'}`}>
          <h2 className="section-title">projects</h2>
          
          {/* Wrapper div to contain the scrollable content */}
          <div className="projects-content-wrapper">
            <div className="section-content">
              {/* Project content goes here */}
              <div className="project-grid">
                <div className="project-card">
                  <div>
                    <h3>Laboratory 374</h3>
                    <div className="project-award">NSGJ 2024 | First Place Winner</div>
                    <p>374 is a portal-inspired first person game where the user is a test subject of a quantum space study and has to pass multiple puzzles as their job. The story twists into the reality of the test and what has become of Lab 374.</p>
                  </div>
                  <div>
                    <div className="project-tech">
                      <span>Unity</span>
                      <span>C#</span>
                      <span>GLSL</span>
                    </div>
                    <button 
                      className="project-visit-button"
                      onClick={() => window.open('https://martinmargolin.itch.io/laboratory374', '_blank', 'noopener,noreferrer')}
                    >
                      visit
                    </button>
                  </div>
                </div>
                
                <div className="project-card">
                  <div>
                    <h3>Asylum</h3>
                    <div className="project-award">NSGJ 2023 | 4th Place</div>
                    <p>A first person horror game developed for the Neumont Summer Game Jam in 2023. Restore power to an abandoned asylum to escape not only the facility but the voices within. Get immersed with eerie sound and visual effects, jump scares, and spooky story line.</p>
                  </div>
                  <div>
                    <div className="project-tech">
                      <span>Unity</span>
                      <span>C#</span>
                      <span>GLSL</span>
                    </div>
                    <button 
                      className="project-visit-button"
                      onClick={() => window.open('https://martinmargolin.itch.io', '_blank', 'noopener,noreferrer')}
                    >
                      visit
                    </button>
                  </div>
                </div>
                
                <div className="project-card">
                  <div>
                    <h3>SCHOOL : The RPG</h3>
                    <div className="project-role">Lead Developer | Game Mechanics</div>
                    <p>This was a 10 week collaborative internship with Neumont Game Studio, where myself along with a group of 5 other developers created a small J-RPG based on the struggle of a student trying to avoid summer school!</p>
                  </div>
                  <div>
                    <div className="project-tech">
                      <span>Unity</span>
                      <span>C#</span>
                      <span>Jira</span>
                      <span>Photoshop</span>
                    </div>
                    <button className="project-visit-button">
                      visit
                    </button>
                  </div>
                </div>
                
                <div className="project-card">
                  <div>
                    <h3>Unity Reverse Engineering: League Of Legends</h3>
                    <p>A passion project that I started working on as a way to prove to myself that I can create complex combat and game mechanics that feel fluid and create a sense of satisfaction when executed well.</p>
                  </div>
                  <div>
                    <div className="project-tech">
                      <span>Unity</span>
                      <span>C#</span>
                    </div>
                    <button className="project-visit-button">
                      visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back button positioned outside the scrollable area */}
          <button 
            className="back-button glass-button" 
            onClick={() => handleSectionChange("welcome")}
          >
            back
          </button>
        </section>

        {/* About Section */}
        <section className={`content-section about-section ${showContent && activeSection === "about" ? 'visible' : 'hidden'}`}>
          <h2 className="section-title">about</h2>
          <p className="welcome-subtitle">kona <span className="separator">•</span> martin</p>
          <div className="section-content">
            <p className="about-text">
              I&apos;m a game development graduate with 3 years of professional experience in the game industry.
            </p>
            <p className="about-text">
              I love putting attention to detail into my projects and I am always searching to use my motivation to absorb new corners of knowledge. I work through theatrics and presentation, and I won&apos;t hesitate to put any creative spark of knowledge or past experience into my work.
            </p>
            <p className="about-text">
              My passion for development and management began in high school, where I made state finals twice for the F.I.R.S.T. robotics competition and helped shape the school&apos;s robotics program and get massive funding to furnish the engineering rooms.
            </p>
            <p className="about-text">
              Aside from development, I am a big game enthusiast with a competitive past. With 2 years of experience playing on and managing collegiate eSports teams for my college, I have mastered working under pressure and managing the communication of large groups.
            </p>
            <p className="about-text">
              I grew up as a professional actor and musician, starring in musicals, commercials, and singing for events up until the end of high school. I still have a love for performance and music, and I love to use those skills in unique and creative ways through my projects!
            </p>
            <p className="about-text">
              I have a world of ideas and I would love to continue sharing them here, thank you for viewing my portfolio!
            </p>
          </div>
          <button 
            className="back-button glass-button" 
            onClick={() => handleSectionChange("welcome")}
          >
            back
          </button>
        </section>
      </div>
    </main>
  );
}
