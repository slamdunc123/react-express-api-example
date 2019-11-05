import React from 'react';

// css
import './Footer.scss';

// paritals
import Social from '../../partials/Social/Social';
import Copyright from '../../partials/Copyright/Copyright';

const Footer = () => {
	return (
		<div className='footer'>
			<Social />
			<Copyright />
		</div>
	);
};

export default Footer;
