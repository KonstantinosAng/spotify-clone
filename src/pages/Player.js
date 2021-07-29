import React from 'react'
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import Footer from '../components/Footer';

function Player({ spotify }) {
	return (
		<div className="flex justify-evenly h-screen w-full">
			<Sidebar />
			<Body spotify={spotify}/>
			<Footer />
		</div>
	)
}

export default Player
