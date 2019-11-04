import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Container
} from 'reactstrap';

// import { Link } from 'react-router-dom';

// css
import './NavigationReactStrap.scss';

class Navigation extends Component {
	state = {
		isOpen: false
	};

	// toggle burger menu when clicked
	toggleBurgerMenu = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	// toggle burger menu when menu link is clicked
	closeBurgerMenu = () => {
		if (this.state.isOpen === true) {
			this.toggleBurgerMenu();
		}
	};

	render() {
		return (
			<div>
				<Navbar color='dark' dark expand='sm' className='mb-0'>
					<Container>
						<NavbarBrand href='/'>Brand Logo</NavbarBrand>
						<NavbarToggler onClick={this.toggleBurgerMenu} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<NavLink
										className='nav-link'
										onClick={e => {
											this.closeBurgerMenu(e);
										}}
										exact
										to='/'
									>
										Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className='nav-link'
										onClick={e => {
											this.closeBurgerMenu(e);
										}}
										exact
										to='/about'
									>
										About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className='nav-link'
										onClick={e => {
											this.closeBurgerMenu(e);
										}}
										exact
										to='/contact'
									>
										Contact
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
