import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { MiniInfoBar } from 'components';
import Firebase from 'firebase';
import { signin, signout } from '../../redux/modules/setLogin';
import { connect } from 'react-redux';

const ref = new Firebase('https://crackling-inferno-5205.firebaseio.com/');

class UserLogin extends Component {
	signUp() {
		ref.createUser({
			email	 : this.state.email,
			password : this.state.password
		}, function(error, userData) {
			console.log(arguments);
			that.props.signin(authData.uid);
		});
	}
	login() {
		var that = this;
		ref.authWithPassword({
			email    : this.state.email,
			password : this.state.password 
		}, function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
				that.props.signin(authData.uid);
			}
		});
	}
	/* getInitialState() {
	   return {
	   email: "",
	   password: ""
	   }
	   } */
	setEmail(e) {
		console.log(e.target.value);
		this.setState({email: e.target.value});
	}
	setPassword(e) {
		console.log(e.target.value);
		this.setState({password: e.target.value});
	}
	signOut() {
		this.props.signout();
	}
	test() {
		console.log(this.state);
	}
	render() {
		return (
				<div className="container">
				<h1>UserLogin</h1>
				<Helmet title="UserLogin Us"/>
				<br/>	
				<div style={this.props.uid ? { display: 'none' } : {}}>
				Email: <input
				type="text"
				onChange={::this.setEmail}
				/>
				<br/>
				Password: <input
				type="password"
				onChange={::this.setPassword}
				/>
				<br/>
				<button onClick={::this.signUp}>Sign Up</button>
				<button onClick={::this.login}>Login</button>
				</div>
				<div style={!this.props.uid ? { display: 'none' } : {}}>
				<button onClick={::this.signOut}>Log Out</button>
				</div>
				</div>
			   );
	}
}

function mapStateToProps(state) {
	return {
		uid: state.setLogin.uid
	}
}

function mapDispatchToProps(dispatch) {
	return {
		signin: (uid) => {
					dispatch(signin(uid));
				},
		signout: () => {
					 dispatch(signout());
				 }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
