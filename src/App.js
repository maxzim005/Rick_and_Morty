import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import Character from './components/Characters/Character';
import Locations from './components/Locations/Locations';
import Location from './components/Locations/Location';
import Episodes from './components/Episodes/Episodes';
import Episode from './components/Episodes/Episode';
import './index.css';

function App() {
	const [charID, setCharID] = useState(0);
	const [epiID, setEpiID] = useState(0);
	const [locID, setLocID] = useState(0);

	const getCharID = (charID) => {
		setCharID(charID);
	}
	const getEpiID = (epiID) => {
		setEpiID(epiID);
	}
	const getLocID = (locID) => {
		setLocID(locID);
	}

	//console.log(charID);
	return (
		<div className='app-wrapper'>
			<Navbar />
			<Route path='/characters' render = { () => <Characters getCharID={getCharID}/>}/>
			<Route path='/character' render = { () => <Character charID={charID}/>}/>
			<Route path='/episodes' render = { () => <Episodes getEpiID={getEpiID}/>}/>
			<Route path='/episode' render = { () => <Episode epiID={epiID} />}/>
			<Route path='/locations' render = { () => <Locations getLocID={getLocID}/>}/>
			<Route path='/location' render = { () => <Location locID={locID}/>}/>
		</div>
	);
}

export default App;
