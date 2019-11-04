import React from 'react';

// router
import { Switch, Route } from 'react-router-dom';

// views
import About from '../../views/About/About';
import Contact from '../../views/Contact/Contact';
import Home from '../../views/Home/Home';

const Main = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</div>
	);
};

export default Main;
