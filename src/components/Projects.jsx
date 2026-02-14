import "./Projects.css";

function Projects() {
  const projectsData = [
    {
      title: "Sorting Algorithms Visualizer",
      description: "Interactive visualization tool for various sorting algorithms built with C, demonstrating algorithm efficiency and performance.",
      tech: ["C", "Algorithms", "Data Structures"],
      github: "https://github.com",
      demo: null,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Bachpan Activity Centre Website",
      description: "Modern, responsive website for an activity center featuring event management, gallery, and contact forms.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://example.com",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "React Portfolio Website",
      description: "Personal portfolio website built with React, featuring smooth animations, dark mode, and responsive design.",
      tech: ["React", "CSS", "Vite"],
      github: "https://github.com",
      demo: "https://example.com",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Some of my recent work and side projects
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image" style={{ background: project.gradient }}>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.385-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.724.019 1.536.145 2.442.42l-.362 1.647c-.768-.27-1.617-.515-2.442-.465-1.489.087-1.62 1.376-.581 1.916 1.711.804 3.964 1.401 3.964 3.548 0 1.401-.92 2.632-2.021 2.863z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;