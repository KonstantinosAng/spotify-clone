import React from 'react'
import Logo from '../assets/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProviderValue } from '../utils/stateProvider';

function Sidebar() {

	//eslint-disable-next-line
	const [state, dispatch] = useStateProviderValue()

	return (
		<div className="h-full w-52 p-5 bg-black text-white overflow-y-auto">
			<img className="object-contain w-32 mb-6" src={Logo} loading="lazy" alt=""/>
			<SidebarOption title="Home" Icon={HomeIcon}/>
			<SidebarOption title="Search" Icon={SearchIcon}/>
			<SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
			<br/>
			<p className="text-md ml-1 pb-2">PLAYLISTS</p>
			<hr className="border solid border-gray-800 my-auto mb-5"/>
			{state.playlists?.items?.map(playlist => (
				<SidebarOption key={playlist.id} id={playlist.id} title={playlist.name}/>
			))}

		</div>
	)
}

export default Sidebar
