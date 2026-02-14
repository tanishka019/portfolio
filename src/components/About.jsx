import React, { useEffect, useRef } from 'react';
import "./About.css";

function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={containerRef}>
      {/* Floating Decor */}
      <div className="magical-flower flower-1"></div>
      <div className="magical-flower flower-2"></div>
      <div className="magical-flower flower-3"></div>

      {/* Magic Hair Path (Background) */}
      <svg className="magic-hair-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M-100,500 C200,100 800,900 1100,500" fill="none" stroke="url(#hairGradient)" strokeWidth="2" strokeOpacity="0.3" />
        <defs>
          <linearGradient id="hairGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
      </svg>

      <div className="about-container">
        {/* Visual Side (Left on Desktop) */}
        <div className="about-visual fade-in-section">
          <div className="profile-container">
            {/* Spinning Sun Crest Background */}
            <div className="sun-crest-bg"></div>

            <div className="profile-frame">
              <div className="profile-image">
                <div className="profile-placeholder">
                  {/* Tangled Sun Icon */}
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="20" fill="#FFD700" />
                    <path d="M50 10L60 35H40L50 10Z" fill="#FFD700" />
                    <path d="M50 90L60 65H40L50 90Z" fill="#FFD700" />
                    <path d="M10 50L35 60V40L10 50Z" fill="#FFD700" />
                    <path d="M90 50L65 60V40L90 50Z" fill="#FFD700" />
                    <circle cx="50" cy="50" r="30" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 4" />
                  </svg>
                </div>
                {/* <img src="/path-to-your-image.jpg" alt="Tanishka" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Content Side (Right on Desktop) */}
        <div className="about-content">
          <h2 className="section-title fade-in-section">About Me</h2>

          <div className="about-card fade-in-section">
            <p className="about-text">
              <span className="highlight">Hi, I'm Tanishka!</span> I'm a passionate AIML student weaving together the worlds of <span className="highlight">Artificial Intelligence</span>, Web Development, and Creative Design. Like Rapunzel painting her tower, I love filling blank canvases with code and color! 🎨
            </p>
            <p className="about-text">
              With a strong foundation in languages like <span className="highlight">C++, Java, and Python</span>, I’m currently venturing into the unknown of Machine Learning and modern Web Frameworks. My dream is to create applications that are as intelligent as they are enchanting.
            </p>
          </div>

          <div className="stats-grid fade-in-section">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Lang Spoken</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">∞</div>
              <div className="stat-label">Curiosity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;