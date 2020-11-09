import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
			<React.Fragment>
			<h1>Login</h1>
			<hr/>
			<div className="row">
				<div className="col-md-4 col-md-offset-2">
					<form onSubmit={e => this.props.handle_login(e, this.state)}>
					<div className="form-group">
						<label className="control-label" htmlFor="username">Username</label>
						<input
							className="form-control col-md-6"
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handle_change}
						/>
					</div>
					<div className="form-group">
						<label className="control-label" htmlFor="password">Password</label>
						<input
							className="form-control col-md-6"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handle_change}
						/>
					</div>
					<input className="btn btn-primary" type="submit" value="Login"/>
				</form>
				</div>
			</div>
			</React.Fragment>
		);
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};