import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
	const logged_out_nav = (
		<ul className="navbar-nav">
			<li className="nav-link text-dark" onClick={() => props.display_form('login')}>Login</li>
			<li className="nav-link text-dark" onClick={() => props.display_form('signup')}>Signup</li>
		</ul>
	);

	const logged_in_nav = (
		<ul className="navbar-nav">
			<li className="nav-link text-dark" >Hello {props.user}</li>
			<li className="nav-link text-dark" onClick={props.handle_logout}>Logout</li>
		</ul>
	);
	return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
	logged_in: PropTypes.bool.isRequired,
	display_form: PropTypes.func.isRequired,
	handle_logout: PropTypes.func.isRequired
};