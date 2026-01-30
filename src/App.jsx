import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock';
import Navbar from './components/Navbar';
import MacWindow from './windows/MacWindow';
import Github from './windows/github';
import Aboutme from './windows/Aboutme';
import Resume from './windows/Resume';
import Spotify from './windows/Spotify';

import TerminalComponent from './windows/TerminalComponent';

const App = () => {
  const [windows, setWindows] = useState({
    github: false,
    resume: false,
    spotify: false,
    terminal: false,
    aboutme: false  // Add this
  })

  const openWindow = (name) => {
    setWindows({
      github: false,
      resume: false,
      spotify: false,
      terminal: false,
      aboutme: false,
      [name]: true
    })
  }

  const closeWindow = (name) => {
    setWindows(prev => ({ ...prev, [name]: false }))
  }

  return (
    <main>
      <Navbar openWindow={openWindow} /> 
      <Dock openWindow={openWindow} />

      {windows.github && <Github onClose={() => closeWindow('github')} />}
      {windows.resume && <Resume onClose={() => closeWindow('resume')} />}
      {windows.spotify && <Spotify onClose={() => closeWindow('spotify')} />}
      {windows.aboutme && (
        <MacWindow w='900' h='600' x='150' y='80' title="About Me" onClose={() => closeWindow('aboutme')}>
          <Aboutme />
        </MacWindow>
      )}
      {windows.terminal && (
        <MacWindow w='700' h='500' x='200' y='100' title="Terminal" onClose={() => closeWindow('terminal')}>
          <TerminalComponent />
        </MacWindow>
      )}
    </main>
  )
}

export default App