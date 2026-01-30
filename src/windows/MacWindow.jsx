import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const MacWindow = ({ children, title = "Samarth-zsh", w, h, x, y, onClose }) => {
    const [width, setWidth] = useState(w)
    const [height, setHeight] = useState(h)

    return (
        <Rnd
            default={{
                x: x,
                y: y,
                width: width,
                height: height
            }}
            minWidth={400}
            minHeight={300}
            bounds="window" // window ke andar hi rahega
            onResize={(e, direction, ref, delta, position) => {
                setWidth(ref.offsetWidth)
                setHeight(ref.offsetHeight)
            }}
        >   
            <div className="window" style={{ width: '100%', height: '100%' }}>
                <div className="macnav">
                    <div className="dots">
                        <div className="dot red" onClick={onClose}><i className="ri-close-line"></i></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="name"> 
                        {title} — {width}x{height}
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