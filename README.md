# Spotify clone

A [spotify clone](https://www.spotify.com) using [ReactJS](https://reactjs.org), React Context API & TailwindCSS for the frontend, [Firebase](https://firebase.google.com) for authorization, authentication, [Spotify for developers](https://developer.spotify.com).

<div align="center">
  <h1><a href="http://kangelopoulos.ddns.net:8080/spotify"> DEMO </a></h1>
</div>

## Requirements

Inside the repo there is a [.env.example file](./.env.example). Rename it to .env and fill the values with your own api keys.

For firebase you will need a firebase config file from your webapp with the following values.

```javascript
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

For the image data you will need an API key from pexels.

```javascript
REACT_APP_PEXELS_API_KEY=
```

## Usage

Assuming you have [npm](https://www.npmjs.com) or [yarn](https://www.yarnpkg.com) installed, clone the repo and run the following code:

```bash
npm install && npm start

or

yarn install && yarn start
```

To build the .exe file for your own OS run the following code:

```bash
npm run make

or

yarn run make
```

## Examples

Electron app
<br>
<p align="center">
  <img src="img/img1.png"/>
  <img src="img/img2.png"/>
  <img src="img/img3.png"/>
</p>
