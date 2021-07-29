export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	// token: "BQBzgetQiBqby-u8WtGbbWzPDTvcw0y12gmW9GM05cxLS-SEXMSItRalRIns3UCiyQUe-hn0vkFZq1oBuIOkVtJwrXYj1VzAXwNIfRk8HTTE2x_2Q0P9hOoVN0Ku_AItoz32GwZKinQqc5XpbB-CDCkby6037g",
	token: null,
	discover_weekly: null,
	playlist: null,
	song: null,
}

export const actionTypes = {
	'SET_USER': 'SET_USER',
	'SET_TOKEN': 'SET_TOKEN',
	'SET_PLAYLISTS': 'SET_PLAYLISTS',
	'SET_PLAYLIST': 'SET_PLAYLIST',
	'SET_SONG': 'SET_SONG',
	'SET_DISCOVER_WEEKLY': 'SET_DISCOVER_WEEKLY',
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			}
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			}
		case 'SET_PLAYLIST':
			return {
				...state,
				playlist: action.playlist
			}
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly
			}
		case 'SET_SONG':
			return {
				...state,
				song: action.song
			}
		default:
			return state;
	}
}
