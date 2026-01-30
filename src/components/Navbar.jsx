import React, { useState, useEffect } from 'react'
import './Navbar.scss'

const Navbar = ({ openWindow }) => {  // Receive openWindow prop
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000) 
		return () => clearInterval(timer)
	}, [])

	let datedata = currentTime.toString().split(" ")

	return (
		<nav className="nav">
			<div className="content1">
				<i className="ri-apple-fill" />
				<h4 className='name'>Samarth Varshney</h4>
				<h4 onClick={() => openWindow && openWindow('aboutme')} style={{ cursor: 'pointer' }}>About Me</h4>
				<h4 onClick={() => openWindow && openWindow('terminal')} style={{ cursor: 'pointer' }}>Terminal</h4>
			</div>
			<div className="content2">
				<i className="ri-wifi-fill"></i>
				<h4>{datedata[0]},</h4>
				<h4>{datedata[1]}</h4>
				<h4>{datedata[2]} ,</h4>
				<h4>{datedata[3]}</h4>
				<h5>{datedata[4]}</h5>
			</div>
		</nav>
	)
}

export default Navbar