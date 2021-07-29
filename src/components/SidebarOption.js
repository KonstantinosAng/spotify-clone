import React from 'react';
import { actionTypes } from '../utils/reducer';
import { useStateProviderValue } from '../utils/stateProvider';

function SidebarOption({ title, Icon, id }) {

	//eslint-disable-next-line
	const [_, dispatch] = useStateProviderValue();

	const handlePlaylistClick = () => {
		if (id) {
			dispatch({
				type: actionTypes.SET_PLAYLIST,
				playlist: id
			})
		}
	}

	return (
		<div onClick={() => handlePlaylistClick()} className="flex justify-start items-center text-gray-500 hover:text-white h-10 cursor-pointer transition duration-200 ease-in">
			{Icon && <Icon className="mr-4"/>}
			{Icon ? <h4>{title}</h4> : <p> {title} </p>}
		</div>
	)
}

export default SidebarOption
