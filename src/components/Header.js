import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useStateProviderValue } from '../utils/stateProvider'

function Header() {

	//eslint-disable-next-line
	const [state, dispatch] = useStateProviderValue();

	return (
		<div className="flex w-full justify-between mb-7">
			<div className="bg-white text-gray-500 rounded-xl flex flex-grow items-center p-3 mx-4 min-w-[70px]">
				<SearchIcon />
				<input className="outline-none w-full mx-1" placeholder="Search for Artists, Songs" type="text"/>
			</div>
			<div className="flex flex-grow items-center justify-end mx-4 text-white font-bold">
				<Avatar src={state?.user?.images[0]?.url} alt={state?.user?.display_name}/>
				<h4 className="ml-2">{state?.user?.display_name}</h4>
			</div>
		</div>
	)
}

export default Header
