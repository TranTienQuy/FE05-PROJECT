import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../../styles/Social.css';

class Social extends Component {
	render() {
		return(
			<div>
				<div className="container-fluid padding">
					<hr/>
					<div className="row text-center">
						<div className="col-12">
							<span className="social-title">SOCIAL</span>
						</div>
						<div className="col-12 social">
							<a href="#"><i className="fab fa-facebook"></i></a>
							<a href="#"><i className="fab fa-twitter"></i></a>
							<a href="#"><i className="fab fa-google-plus-g"></i></a>
							<a href="#"><i className="fab fa-instagram"></i></a>
							<a href="#"><i className="fab fa-youtube"></i></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Social;