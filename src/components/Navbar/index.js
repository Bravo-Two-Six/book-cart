import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import LoginForm from "../Auth/LoginForm";
import SignupForm from "../Auth/SignupForm";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed_form: '',
			logged_in: localStorage.getItem('token') ? true : false,
			username: ''
		};
	}

	componentDidMount() {
    if (this.state.logged_in) {
      fetch('/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

	display_form = form => {
		this.setState({
			displayed_form: form
		});
	};
	handle_logout = () => {
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '' });
	};

	render() {
		let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }
		return (
			<React.Fragment>
			<header>
				<nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-arielle-smile border-bottom box-shadow mb-3 fixed-header">
					<div className="container">
						<Link className="navbar-brand text-dark" to="/">Book Cart</Link>
						<div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
							<Nav display_form={this.display_form} handle_logout={this.handle_logout} logged_in={this.state.logged_in} user={this.state.username} />
							<ul className="navbar-nav flex-grow-1">
								<li>
									<Link className="nav-link text-dark" to="/">Home</Link>
								</li>
								<li>
									<div className="dropdown">
										<div className="nav-link text-dark dropdown-toggle" role="button"
											  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
											  aria-expanded="false">
											Dropdown Links
										</div>
										<div className="dropdown-menu bg-sunny-morning"
											 aria-labelledby="dropdownMenuButton">
											<Link className="dropdown-item" to="/link1">List Item 1</Link>
											<Link className="dropdown-item"
												  to="/link2">List Item 2</Link>
										</div>
									</div>
								</li>
								<li>
									<Link className="nav-link text-dark"
										  to="/Privacy">Privacy</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<div className="container">
				{form}
			</div>
		</React.Fragment>
		);
	}
}

export default Navbar;