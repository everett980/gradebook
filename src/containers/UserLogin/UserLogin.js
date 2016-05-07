import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { MiniInfoBar } from 'components';
import Firebase from 'firebase';

const ref = new Firebase('https://crackling-inferno-5205.firebaseio.com/');

export default class UserLogin extends Component {
	signUp() {
		ref.createUser({
			email	 : this.state.email,
			password : this.state.password
		}, function(error, userData) {
			console.log(arguments);
		});
	}
	login() {
		ref.authWithPassword({
			email    : this.state.email,
			password : this.state.password 
		}, function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
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
	test() {
		console.log(this.state);
	}
	render() {
		return (
				<div className="container">
				<h1>UserLogin</h1>
				<Helmet title="UserLogin Us"/>
				<br/>	
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
			   );
	}
}
