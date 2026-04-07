import React, { useState, useEffect } from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const MacWindow = ({ children, title = "Samarth-zsh", w, h, x, y, onClose }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [width, setWidth] = useState(isMobile ? window.innerWidth * 0.95 : w)
    const [height, setHeight] = useState(isMobile ? window.innerHeight * 0.7 : h)
    const [posX, setPosX] = useState(isMobile ? (window.innerWidth - (window.innerWidth * 0.95)) / 2 : x)
    const [posY, setPosY] = useState(isMobile ? 60 : y)

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)
            if (mobile) {
                setWidth(window.innerWidth * 0.95)
                setHeight(window.innerHeight * 0.7)
                setPosX((window.innerWidth - (window.innerWidth * 0.95)) / 2)
                setPosY(60)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Rnd
            size={{ width, height }}
            position={{ x: posX, y: posY }}
            onDragStop={(e, d) => {
                setPosX(d.x)
                setPosY(d.y)
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setWidth(ref.style.width)
                setHeight(ref.style.height)
                setPosX(position.x)
                setPosY(position.y)
            }}
            minWidth={isMobile ? 300 : 400}
            minHeight={isMobile ? 250 : 300}
            bounds="main"
            disableDragging={isMobile}
            enableResizing={!isMobile}
        >   
            <div className="window" style={{ width: '100%', height: '100%' }}>
                <div className="macnav">
                    <div className="dots">
                        <div className="dot red" onClick={onClose}><i className="ri-close-line"></i></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="name"> 
                        {title}
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow