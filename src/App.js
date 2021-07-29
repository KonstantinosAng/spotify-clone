import { useEffect } from 'react';
import { getTokenFromResponse } from './_api/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './utils/stateProvider';
import { actionTypes } from './utils/reducer';
import Login from './pages/Login';
import Player from './pages/Player';

const spotify = new SpotifyWebApi()

function App() {

	const [state, dispatch] = useStateProviderValue();

	useEffect(() => {
		const hash = getTokenFromResponse();
		if (hash.access_token) {
			dispatch({
				type: actionTypes.SET_TOKEN,
				token: hash.access_token
			})
			spotify.setAccessToken(hash.access_token);
			spotify.getMe().then(_user => {
				dispatch({
					type: actionTypes.SET_USER,
					user: _user
				})
			})
			spotify.getUserPlaylists().then(playlists => {
				dispatch({
					type: actionTypes.SET_PLAYLISTS,
					playlists: playlists
				})
			})

		}
		window.location.hash = '';
	}, [dispatch])

	useEffect(() => {
		if (state?.playlist) {
			spotify.getPlaylist(state.playlist).then(playlist => {
				dispatch({
					type: actionTypes.SET_DISCOVER_WEEKLY,
					discover_weekly: playlist
				})
			})
		}
	}, [state.playlist, dispatch])

	return (
    <div>
			{state.token ?
				<Player />
				:
				<Login />
			}
    </div>
  );
}

export default App;
