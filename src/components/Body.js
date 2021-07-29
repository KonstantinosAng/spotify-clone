import React, { useEffect, useState } from 'react'
import Header from './Header'
import SearchResult from './SearchResult';
import { useStateProviderValue } from '../utils/stateProvider'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import { actionTypes } from '../utils/reducer';

function Body({ spotify }) {

	//eslint-disable-next-line
	const [state, dispatch] = useStateProviderValue()
	const [input, setInput] = useState('')
	const [search, setSearch] = useState()
	const [searchResults, setSearchResults] = useState()
	const [logout, setLogout] = useState(false)
	const [activeResult, setActiveResult] = useState('albums')

	useEffect(() => {
		if (search) {
			spotify.search(input, ["album", "artist", "playlist", "track"]).then(res => {
				setSearchResults(res)
				dispatch({
					type: actionTypes.SET_PLAYLIST,
					playlist: null
				})
				setSearch(false)
			}).catch(error => {
				console.error(error)
			})
		}
	//eslint-disable-next-line
	}, [search, spotify, dispatch])

	useEffect(() => {
		if (state.playlist) {
			setSearchResults(null)
			setInput('')
		}
	}, [search, state.playlist])

	useEffect(() => {
		if (logout) {
			dispatch({
				type: actionTypes.SET_USER,
				user: null
			})
			window.location.reload()
		}
	}, [logout, dispatch])

	return (
		<div className="bg-gradient-to-b from-gray-900 to-black h-full flex-grow p-5 pb-24 text-white overflow-y-auto scrollbar-hide">
			<Header setLogout={setLogout} input={input} setInput={setInput} setSearch={setSearch}/>
			{ searchResults && (
				<div className="w-11/12">
					<div className="text-md lg:text-4xl flex justify-between items-center">
						<p className={`${activeResult === 'albums' && 'text-green-500'} cursor-pointer`} onClick={() => setActiveResult('albums')}>Albums</p>
						<p className={`${activeResult === 'artists' && 'text-green-500'} cursor-pointer mx-1`} onClick={() => setActiveResult('artists')}>Artists</p>
						<p className={`${activeResult === 'playlists' && 'text-green-500'} cursor-pointer mx-1`} onClick={() => setActiveResult('playlists')}>Playlists</p>
						<p className={`${activeResult === 'tracks' && 'text-green-500'} cursor-pointer mx-1`} onClick={() => setActiveResult('tracks')}>Tracks</p>
					</div>
					<hr className="border-1 solid border-gray-700 shadow-lg my-2"/>
					{activeResult === 'albums' && <SearchResult title="Albums" data={searchResults?.albums?.items}/>}
					{activeResult === 'artists' && <SearchResult title="Artists" data={searchResults?.artists?.items}/>}
					{activeResult === 'playlists' && <SearchResult title="Playlists" data={searchResults?.playlists?.items}/>}
					{activeResult === 'tracks' && <SearchResult title="Tracks" data={searchResults?.tracks?.items}/>}
				</div>
				)
			}
			{state?.playlist &&
			<>
			<div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left sm:items-end p-2">
				<img className="w-44 md:w-60 lg:w-80 object-contain ml-2 mr-5 shadow-xl" src={state?.discover_weekly?.images[0].url} alt={state?.discover_weekly?.description}/>
				<div className="flex-1">
					<h2 className="text-xs md:text-lg lg:text-xl font-bold"> PLAYLIST </h2>
					<h2 className="text-md md:text-3xl lg:text-5xl lg:mb-2"> {state?.discover_weekly?.name} </h2>
					<p className="text-xs md:text-md"> {state?.discover_weekly?.description} </p>
				</div>
			</div>

			<div className="">
				<div className="flex items-center ml-12 mt-5 mb-5 transition duration-100 ease-in space-x-5">
					<PlayCircleFilledIcon className="text-4xl lg:text-7xl transform hover:scale-105 cursor-pointer"/>
					<FavoriteIcon fontSize="large" className="cursor-pointer text-red-500"/>
					<MoreHorizIcon className="cursor-pointer"/>
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
