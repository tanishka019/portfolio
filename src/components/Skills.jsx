import React, { useEffect, useRef } from 'react';
import "./Skills.css";

// Robust Inline SVGs to ensure visibility without dependencies
const StarFilled = ({ size = 24, color = "#FFD700" }) => (
  <svg className="star filled" width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" />
  </svg>
);

const StarEmpty = ({ size = 24, color = "rgba(255, 255, 255, 0.3)" }) => (
  <svg className="star empty" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" />
  </svg>
);

function Skills() {
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

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.fade-in-section');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", rating: 3 },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", rating: 3 },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", rating: 4 },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", rating: 4 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", rating: 3 },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", rating: 2 },
  ];

  const renderStars = (rating) => {
    return (
      <div className="skill-rating-container">
        <div className="skill-stars">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="star-wrapper">
              {i < rating ? (
                <StarFilled size={22} color="#ffd700" />
              ) : (
                <StarEmpty size={22} color="rgba(255, 255, 255, 0.3)" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      {/* Background Decor */}
      <div className="skill-lantern lantern-1"></div>
      <div className="skill-lantern lantern-2"></div>
      <div className="skill-lantern lantern-3"></div>

      <div className="skills-container">
        <h2 className="section-title fade-in-section">My Royal Arsenal</h2>
        <p className="section-subtitle fade-in-section">
          Mastery of the Digital Arts
        </p>

        <div className="skills-lantern-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="lantern-card fade-in-section"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Card Header: Icon & Name */}
              <div className="lantern-header">
                <div className="lantern-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} className="lantern-icon-img" />
                </div>
                <span className="lantern-name">{skill.name}</span>
              </div>

              {/* Card Footer: Stars */}
              <div className="lantern-footer">
                {renderStars(skill.rating)}
              </div>

              {/* Decorative Glow */}
              <div className="lantern-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;