import React from 'react';

import Watch from './watch/organisms/Watch';

import './App.css';


export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Watch />
			</div>
		);
	}
}
