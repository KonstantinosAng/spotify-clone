import React from 'react';
import Logo from '../assets/logo.png';

function Login() {
	return (
		<div className="login__root">
			<img alt="" loading="lazy" src={Logo} />
			<button> Sign in with Spotify </button>
		</div>
	)
}

export default Login
