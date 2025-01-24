import React from "react";
import "./App.css";
import profileImage from "./dp.jpg"; // Add your image file in the src folder

const App = () => {
  const projects = [
    {
      title: "Advanced Keyloggers",
      description: "A project focused on cybersecurity and ethical hacking.",
      link: "https://github.com/Deavanathan/Keyloggers",
    },
    {
      title: "SIEM Deployment with ELK Stack",
      description: "Real-time security monitoring using ELK Stack.",
      link: "#",
    },
    {
      title: "Accicare - The Life Saviour",
      description: "Software and hardware integration for accident detection.",
      link: "https://github.com/Deavanathan/ACCICARE",
    },
    {
      title: "DDoS Attack Detection",
      description: "Machine learning on the CICDDoS2019 dataset.",
      link: "https://github.com/Deavanathan/DDoS_Attack_Model",
    },
  ];

  const skills = [
    "C",
    "C++",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Wireshark",
    "Nmap",
  ];

  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <h1>Deavanathan S.</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1>
            Hi, I'm <span className="name">Deavanathan S.</span>
          </h1>
          <p className="subtitle">
            Aspiring Cybersecurity Professional | Problem-Solver | AI Enthusiast
          </p>
          <p className="description">
            With a passion for programming, problem-solving, and cybersecurity, I
            am dedicated to using technology to address real-world problems with
            innovation and ethics.
          </p>
          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1hA0tnKaz8FpBapUu4fjZ-MiLeiZhZufS/view" className="btn">
              View Resume
            </a>
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>B.Tech (AIDS)</strong> - Sri Eshwar College of Engineering
                (2023-2027) – CGPA: 8.23
              </li>
              <li>
                <strong>HSC and SSLC</strong> - Jawahar Matriculation School
              </li>
            </ul>
          </div>
          <div className="interests">
            <h3>Interests</h3>
            <p>
              Cybersecurity ethics, Artificial Intelligence, and innovation drive
              my work.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-rectangle" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>1st Place - TECHNOFEST Hackathon</h3>
            <p>Won first place in a national-level hackathon.</p>
          </div>
          <div className="achievement-card">
            <h3>1st Place - FRESHATHON Hackathon</h3>
            <p>Secured first place in a college-level hackathon.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2025 Deavanathan S. | Built with ❤️ using React.js
        </p>
      </footer>
    </div>
  );
};

export default App;