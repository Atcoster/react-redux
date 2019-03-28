import React, { Component } from 'react';

import './App.scss';
import TaskList from './components/core/task-list/task-list';

class App extends Component {
	render() {
		return (
			<>
				<div className="App">
					<h1>React-Redux</h1>
					<TaskList />
				</div>
			</>
		);
	}
}

export default App;
