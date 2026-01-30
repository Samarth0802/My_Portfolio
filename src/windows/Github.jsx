import React from 'react'
import './Github.scss'
import projectsData from '../assets/github'
import MacWindow from './MacWindow'

const Github = ({ onClose }) => {
  return (
    <MacWindow w='500' h='400' x='50'  y='50' onClose={onClose}>
      <div className='main'>
      <div className='content'>
        <h1>Projects</h1>
        <a href="https://github.com/Samarth0802" target='_blank'>View All</a>
      </div>
      <div className='project-box'>
        {projectsData.map((data) => (
          <div className="project-card" key={data.id}>
            <div className="image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="card-content">
              <h3 className="title">{data.title}</h3>
              <p className="description">{data.description}</p>
              <div className="tags">
                {data.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="links">
                <a href={data.repoLink} target="_blank" rel="noopener noreferrer">
                  <i className="ri-github-fill"></i> Code
                </a>
                {data.demoLink && (
                  <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
                    <i className="ri-external-link-line"></i> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </MacWindow>
  )
}

export default Github