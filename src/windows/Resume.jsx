import React from 'react'
import MacWindow from './MacWindow'
import './Resume.scss'

const Resume = ({ onClose }) => {
  return (
    <MacWindow w='600' h='350' x='150' y='50' onClose={onClose}>
        <div className="resume">
            <iframe src="/Samarth_cv_new (2).pdf" frameBorder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume
