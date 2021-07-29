import React, { useEffect, useState } from 'react';
import { actionTypes } from '../utils/reducer';
import { useStateProviderValue } from '../utils/stateProvider';

function SidebarOption({ title, Icon, id }) {

	const [state, dispatch] = useStateProviderValue();
	const [active, setActive] = useState()

	const handlePlaylistClick = () => {
		if (id) {
			dispatch({
				type: actionTypes.SET_PLAYLIST,
				playlist: id
			})
		}
	}

	useEffect(() => {
		if (state.playlist && state.playlist === id) {
			setActive(true)
		} else {
			setActive(false)
		}
	}, [state.playlist, id])

	return (
		<div onClick={() => handlePlaylistClick()} className={`text-xs lg:text-lg flex justify-center text-center sm:text-left sm:justify-start items-center ${active ? 'text-white' : 'text-gray-500'} hover:text-white h-10 cursor-pointer transition duration-200 ease-in`}>
			{Icon && <Icon className="sm:mr-4"/>}
			{Icon ? <p className="hidden sm:block">{title}</p> : <p className=""> {title} </p>}
		</div>
	)
}

export default SidebarOption
