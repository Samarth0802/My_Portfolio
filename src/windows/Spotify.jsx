import React from 'react'
import MacWindow from './MacWindow'
import './Spotify.scss'

const Spotify = ({ onClose }) => {
  return (
    <MacWindow w='400' h='400' x='500' y='200' onClose={onClose}>
        <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/1oU4ZHP9OIMemE5oNOnvTJ?utm_source=generator" width="100%" height="100%" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}   

export default Spotify
