import React, { useRef, useEffect, useState } from 'react'
import Terminal from 'react-console-emulator'
import terminalCommands from '../assets/terminalCommand'
import './Terminal.scss'

const TerminalComponent = () => {
  const terminalRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (terminalRef.current && !isMobile) {
      terminalRef.current.pushToStdout(terminalCommands.banner.fn())
    }
  }, [isMobile])

  // Enhance commands with clearStdout capability
  const enhancedCommands = {
    ...terminalCommands,
    clear: {
      ...terminalCommands.clear,
      fn: () => {
        if (terminalRef.current) {
          terminalRef.current.clearStdout()
        }
        return ''
      }
    }
  }

  if (isMobile) {
    return (
      <div className="terminal-mobile-restricted">
        <div className="restriction-message">
          <i className="ri-computer-line"></i>
          <h2>Desktop View Only</h2>
          <p>The terminal and CLI features are optimized for desktop use. Please switch to a laptop or PC to use the terminal.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="terminal-container">
      <Terminal
        ref={terminalRef}
        commands={enhancedCommands}
        welcomeMessage=""
        promptLabel="samarth@portfolio:~$"
        style={{
          backgroundColor: '#000000',
          minHeight: '100%',
          maxHeight: '100%',
          overflow: 'auto'
        }}
        styleEchoBack="fullInherit"
        contentStyle={{
          color: '#00ff00',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '14px',
          padding: '10px'
        }}
        promptLabelStyle={{
          color: '#00ff00',
          fontWeight: 'bold'
        }}
        inputTextStyle={{
          color: '#ffffff'
        }}
        messageStyle={{
          color: '#ffffff'
        }}
        autoFocus={true}
        noDefaults={true}
      />
    </div>
  )
}

export default TerminalComponent