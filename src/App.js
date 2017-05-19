const remote = window.require('electron').remote;
import React from 'react';

import Watch from './watch/organisms/Watch';

import './App.css';


export default class App extends React.Component {
	constructor() {
		super();

		this.close = this.close.bind(this);
	}

	close(event) {
		let window = remote.getCurrentWindow();
		window.close();
	}

	minimize(event) {
		let window = remote.getCurrentWindow();
		window.minimize(); 
	}

	render() {
		return (
			<div className="app">
				<div className="window-buttons">
					<button className="minimize-button" onClick={this.minimize}>&minus;</button>
					<button className="close-button" onClick={this.close}>&times;</button>
				</div>

				<Watch />
			</div>
		);
	}
}
