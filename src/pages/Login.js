import React from 'react';
import Logo from '../assets/logo.png';
import { loginUrl } from '../_api/spotify';

function Login() {

	return (
		<div className="grid place-items-center h-screen bg-black">
			<img className="w-1/3 box-border object-contain" alt="" loading="lazy" src={Logo} />
			<a href={loginUrl} className="uppercase px-6 py-4 rounded-3xl text-xl text-white font-bold bg-green-700"> sign in with spotify </a>
		</div>
	)
}

export default Login
