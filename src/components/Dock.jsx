import React from 'react'
import './Dock.scss'

const Dock = ({ openWindow }) => {

  return (
    <footer className="dock">
      <div className="dock-item">
        <span className="label">Calendar</span>
        <a href="https://calendar.google.com/calendar/u/0/r?pli=1" target="_blank" rel="noopener noreferrer">
            <img src="/doc-icons/calender.svg" className="icon calendar-icon" alt="Calendar"/>
        </a>
        </div>
      <div className="dock-item">
        <span className="label">CLI</span>
        <img src="/doc-icons/cli.svg" className="icon cli-icon" onClick={() => openWindow && openWindow('terminal')} />
      </div>

      {/* GitHub moved to Projects - removed from dock */}

      <div className="dock-item">
        <span className="label">Projects</span>
        <img src="/doc-icons/link.svg" className="icon link-icon" onClick={() => openWindow && openWindow('github')} />
      </div>

      <div className="dock-item">
      <span className="label">Mail to me</span>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=samarthvarshney08022005@gmail.com&su=Hello Samarth&body=Hi, I would like to connect with you."
        target="_blank"
        rel="noreferrer"
      >
        <img src="/doc-icons/mail.svg" className="icon mail-icon" />
      </a>
    </div>


      {/* Notes removed from dock as requested */}

      <div className="dock-item">
        <span className="label">Resume</span>
        <img src="/doc-icons/pdf.svg" className="icon pdf-icon" onClick={() => openWindow && openWindow('resume')} />
      </div>

      <div className="dock-item">
        <span className="label">Spotify</span>
        <img src="/doc-icons/spotify.svg" className="icon spotify-icon" onClick={() => openWindow && openWindow('spotify')} />
      </div>

    </footer>
  )
}

export default Dock
