import React from 'react';
import './App.css';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// views
import Header from './components/layouts/Header/Header';
import Main from './components/layouts/Main/Main';
import Footer from './components/layouts/Footer/Footer';

function App() {
	return (
		<Router basename={'/'}>
			<div className='App'>
				<Header />
				<Main />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
