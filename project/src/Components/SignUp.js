import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class SignUp extends Component {
	render() {
		return(
			<div className="container-fluid text-center">
			<h3 className="padding">New? Register Now!</h3>
				<div className="container padding">
					<form>
						<div className="form-group">
							<label for="exampleInputEmail1">Email</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." />
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password..." />
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Address</label>
							<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Address..." />
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Phone</label>
							<input type="number" className="form-control" id="exampleInputPassword1" placeholder="phone..." />
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" for="exampleCheck1">Creat account</label>
						</div>
						<button type="submit" className="btn btn-outline-success">Submit</button>
						<button type="submit" className="btn btn-primary">Reset</button>
					</form>	
				</div>
			</div>
		);
	}
}

export default SignUp;