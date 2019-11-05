import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

// css
import './Navigation.scss';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	// toggle burger menu when clicked
	const toggleBurgerMenu = () => {
		setIsOpen(!isOpen);
	};

	// toggle burger menu when menu link is clicked
	const closeBurgerMenu = () => {
		if (isOpen === true) {
			toggleBurgerMenu();
		}
	};

	return (
		<div>
			<div className='mobile-navigation'>
				<div className='brand-logo'>Brand Logo</div>
				<div className='nav-menu'>
					<NavLink
						className='nav-link'
						onClick={e => {
							closeBurgerMenu(e);
						}}
						exact
						to='/'
					>
						Home
					</NavLink>
					<NavLink
						className='nav-link'
						onClick={e => {
							closeBurgerMenu(e);
						}}
						exact
						to='/about'
					>
						About
					</NavLink>
					<NavLink
						className='nav-link'
						onClick={e => {
							closeBurgerMenu(e);
						}}
						exact
						to='/contact'
					>
						Contact
					</NavLink>
				</div>
				<div className='mobile-burger-button'>
					<i className='fas fa-bars' onClick={toggleBurgerMenu}></i>
				</div>
			</div>

			{isOpen ? (
				<div className='mobile-menu'>
					<NavLink
						className='nav-link'
						onClick={e => {
							closeBurgerMenu(e);
						}}
						exact
						to='/'
					>
						Home
					</NavLink>
					<NavLink
						className='nav-link'
						onClick={e => {
							closeBurgerMenu(e);
						}}
						exact
						to='/about'
					>
						About
					</NavLink>
					<NavLink
						className='nav-link'
						onClick={e => {
							closeBurgerMenu(e);
						}}
						exact
						to='/contact'
					>
						Contact
					</NavLink>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Navigation;
