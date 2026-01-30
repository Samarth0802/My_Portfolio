import React from 'react'
import aboutMeData from '../assets/aboutme'
import './Aboutme.scss'

const Aboutme = () => {
  console.log('Full aboutMeData:', aboutMeData)

  // Check if data exists
  if (!aboutMeData) {
    return <div style={{ color: 'white', padding: '40px' }}>Loading data...</div>
  }

  return (
    <div className="aboutme-container">
      {/* Header Section */}
      <div className="about-header">
        <h1>{aboutMeData.personal?.name || 'Samarth Varshney'}</h1>
        <p className="title">{aboutMeData.personal?.title || 'Developer'}</p>
        <div className="personal-info">
          <span>📧 {aboutMeData.personal?.email}</span>
          <span>🎂 {aboutMeData.personal?.age} years old</span>
          <span>📍 {aboutMeData.personal?.city}</span>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bio-section">
        <p>{aboutMeData.personal?.bio}</p>
      </div>

      {/* Skills Proficiency */}
      {aboutMeData.skillsProficiency && aboutMeData.skillsProficiency.length > 0 ? (
        <section className="skills-section">
          <h2>Skills Proficiency</h2>
          <div className="skills-grid">
            {aboutMeData.skillsProficiency.map((skill, index) => (
              <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-fill" 
                    style={{ 
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color,
                      animationDelay: `${index * 0.1 + 0.3}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div style={{ color: 'red', padding: '20px' }}>Skills data not found!</div>
      )}

      {/* Technical Skills */}
      {aboutMeData.technicalSkills ? (
        <section className="tech-skills-section">
          <h2>Technical Skills</h2>
          <div className="tech-grid">
            {aboutMeData.technicalSkills.languages && (
              <div className="tech-category">
                <h3>Languages</h3>
                <div className="tech-tags">
                  {aboutMeData.technicalSkills.languages.map((lang, i) => (
                    <span key={i} className="tech-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {aboutMeData.technicalSkills.frameworks && (
              <div className="tech-category">
                <h3>Frameworks & Libraries</h3>
                <div className="tech-tags">
                  {aboutMeData.technicalSkills.frameworks.map((fw, i) => (
                    <span key={i} className="tech-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {aboutMeData.technicalSkills.cloudDatabases && (
              <div className="tech-category">
                <h3>Tools & Databases</h3>
                <div className="tech-tags">
                  {aboutMeData.technicalSkills.cloudDatabases.map((db, i) => (
                    <span key={i} className="tech-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        <div style={{ color: 'red', padding: '20px' }}>Technical skills data not found!</div>
      )}

      {/* Education */}
      {aboutMeData.education && aboutMeData.education.length > 0 ? (
        <section className="education-section">
          <h2>Education</h2>
          <div className="education-grid">
            {aboutMeData.education.map((edu, index) => (
              <div key={edu.id} className="education-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <span className="period">{edu.period}</span>
                <h3>{edu.degree}</h3>
                {edu.institution && <p className="institution">{edu.institution}</p>}
                {edu.description && <p className="description">{edu.description}</p>}
                {edu.cgpa && <p className="grade">CGPA: {edu.cgpa}</p>}
                {edu.percentage && <p className="grade">{edu.percentage}</p>}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div style={{ color: 'red', padding: '20px' }}>Education data not found!</div>
      )}

      {/* Experience */}
      {aboutMeData.experience && aboutMeData.experience.length > 0 ? (
        <section className="experience-section">
          <h2>Experience</h2>
          <div className="experience-grid">
            {aboutMeData.experience.map((exp, index) => (
              <div key={exp.id} className="experience-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="exp-header">
                  <h3>{exp.position}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="company">{exp.company}</p>
                <ul className="description-list">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div style={{ color: 'red', padding: '20px' }}>Experience data not found!</div>
      )}
    </div>
  )
}

export default Aboutme