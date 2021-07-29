import React from 'react'
import { actionTypes } from '../utils/reducer';
import { useStateProviderValue } from '../utils/stateProvider';

function SongRow({ track }) {

	//eslint-disable-next-line
	const [_, dispatch] = useStateProviderValue();

	const handleSongClick = () => {
		dispatch({
			type: actionTypes.SET_SONG,
			song: track
		})
	}

	return (
		<div onClick={() => handleSongClick()} className="flex items-center justify-start my-8 mx-3 hover:bg-black cursor-pointer">
			<img
			className="object-contain w-20"
			src={track?.album?.images[0]?.url}
			alt={track?.name}
			/>
			<div className="ml-5">
				<h1 className="text-white font-bold text-xl">{track?.name}</h1>
				<p className="text-gray-500">
					{track?.artists.map(artist => artist?.name)} - {track?.album?.name}
				</p>
			</div>
		</div>
	)
}

export default SongRow
