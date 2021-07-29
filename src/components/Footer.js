import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Slider } from '@material-ui/core';
import { useStateProviderValue } from '../utils/stateProvider';

function Footer() {

	//eslint-disable-next-line
	const [state, dispatch] = useStateProviderValue()

	return (
		<div className="absolute bottom-0 h-20 flex overflow-x-auto w-full justify-between items-center bg-gray-900 px-5">

			<div className="flex flex-1 items-center text-white max-w-xs mr-7">
				{state?.song && (
					<>
					<img className="object-contain hidden sm:block w-14 h-14 mr-5" alt={state?.song?.name} src={state?.song?.album?.images[0]?.url}/>
					<div className="text-center sm:text-left">
						<h4 className="text-xs sm:text-md font-bold"> {state?.song?.name} </h4>
						<p className="hidden sm:block sm:text-sm underline"> {state?.song?.artists?.map(artist => artist?.name)} - {state?.song?.album?.name} </p>
					</div>
					</>
				)}
			</div>

			<div className="flex flex-1 items-center justify-between max-w-xs">
				<ShuffleIcon className="cursor-pointer text-green-600 hover:text-green-500 transform hover:scale-125 transition duration-100 ease-in"/>
				<SkipPreviousIcon className="cursor-pointer text-gray-400 hover:text-white transform hover:scale-125 transition duration-100 ease-in"/>
				<PlayCircleOutlineIcon fontSize="large" className="cursor-pointer text-gray-400 transform hover:scale-125 hover:text-white transition duration-100 ease-in"/>
				<SkipNextIcon className="cursor-pointer text-gray-400 hover:text-white transform hover:scale-125 transition duration-100 ease-in"/>
				<RepeatIcon className="cursor-pointer text-green-600 hover:text-green-500 transform hover:scale-125 transition duration-100 ease-in"/>
			</div>

			<div className="flex flex-1 items-center justify-between max-w-xs space-x-5 ml-4">
				<PlaylistPlayIcon className="text-gray-400 cursor-pointer"/>
				<VolumeDownIcon className="text-gray-400 cursor-pointer"/>
				<Slider className="text-green-600"/>
			</div>

		</div>
	)
}

export default Footer
