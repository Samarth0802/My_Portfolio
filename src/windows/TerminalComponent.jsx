import React, { useRef, useEffect } from 'react'
import Terminal from 'react-console-emulator'
import terminalCommands from '../assets/terminalCommand'
import './Terminal.scss'

const TerminalComponent = () => {
  const terminalRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.pushToStdout(terminalCommands.banner.fn())
    }
  }, [])

  return (
    <div className="terminal-container">
      <Terminal
        ref={terminalRef}
        commands={terminalCommands}
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