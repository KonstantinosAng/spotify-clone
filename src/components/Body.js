import React from 'react'
import Header from './Header'
import { useStateProviderValue } from '../utils/stateProvider'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body() {

	//eslint-disable-next-line
	const [state, dispatch] = useStateProviderValue()
	console.log(state.discover_weekly)

	return (
		<div className="bg-gradient-to-b from-gray-900 to-black h-full flex-grow p-5 text-white overflow-y-auto scrollbar-hide">
			<Header />
			{state?.playlist &&
			<>
			<div className="flex items-end p-2">
				<img className="w-80 object-contain ml-2 mr-5 shadow-xl" src={state?.discover_weekly?.images[0].url} alt={state?.discover_weekly?.description}/>
				<div className="flex-1">
					<strong> PLAYLIST </strong>
					<h2 className="text-5xl mb-2"> {state?.discover_weekly?.name} </h2>
					<p className="text-sm"> {state?.discover_weekly?.description} </p>
				</div>
			</div>

			<div className="">
				<div className="flex items-center ml-12 mt-5 mb-5 transition duration-100 ease-in">
					<PlayCircleFilledIcon className="mr-5 text-7xl transform hover:scale-105 cursor-pointer"/>
					<FavoriteIcon fontSize="large" className="mr-5 cursor-pointer"/>
					<MoreHorizIcon className="mr-5 cursor-pointer"/>
				</div>

				<div>
					{state?.discover_weekly?.tracks.items.map(item => (
						<SongRow track={item.track} key={item.track.id}/>
					))}
				</div>
			</div>
			</>
			}
		</div>
	)
}

export default Body
