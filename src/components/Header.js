import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateProviderValue } from '../utils/stateProvider'

function Header({ input, setInput, setSearch, setLogout }) {

	//eslint-disable-next-line
	const [state, dispatch] = useStateProviderValue();

	const [dropMenu, setDropMenu] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setSearch(true)
	}

	useEffect(() => {
		if (dropMenu) {
			document.getElementById('dropmenu__root').focus()
		}
	}, [dropMenu])

	return (
		<div className="flex flex-col space-y-2 lg:space-y-0 sm:flex-row w-full justify-between mb-7">
			<div className="bg-white text-gray-500 rounded-xl flex flex-grow items-center p-1 lg:p-3 mx-4 min-w-[70px]">
				<form className="flex w-full" onSubmit={(e)=>handleSubmit(e)}>
					<SearchIcon />
					<input autoComplete="true" onChange={(e)=>setInput(e.target.value)} value={input} className="outline-none w-full mx-1" placeholder="Search for Artists | Songs | Playlists | Tracks" type="text"/>
					<button hidden />
				</form>
			</div>
			<div className="flex flex-grow items-center justify-end sm:mx-4 text-white font-bold relative">
				<Avatar className="object-contain w-10 h-10 lg:w-12 lg:h-12" src={state?.user?.images[0]?.url} alt={state?.user?.display_name}/>
				<h4 className="ml-2 text-sm lg:text-lg">{state?.user?.display_name}</h4>
				<ArrowDropDownIcon onClick={()=>setDropMenu(!dropMenu)} className="text-green-600 object-contain w-10 h-10 cursor-pointer hover:text-green-400"/>
				{dropMenu && (
					<div id="dropmenu__root" tabIndex={-1} onBlur={()=>setDropMenu(false)} className="absolute -bottom-9 right-2 text-red-500 hover:text-red-600 bg-gray-800 px-8 text-lg py-1 rounded-xl cursor-pointer shadow-md border solid border-white border-opacity-5">
						<p onClick={()=>setLogout(true)}> Logout </p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Header
