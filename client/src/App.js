import React from 'react';
import logo from './logo.svg';
import './App.css';

// views

import Header from './components/layouts/Header/Header';
import Main from './components/layouts/Main/Main';
import Footer from './components/layouts/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
