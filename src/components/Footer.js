import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleRandom = () => {
		window.location.reload();
	};
	render() {
		return (
			<div className="Footer">
				<button onClick={this.handleRandom}>More Keggy</button>
				<a className="contact" href="mailto:@dan.s.cross@icloud.com">
					Contact the Creator
				</a>
				<span className="footer-text">Kevin Keegan Quote Generator &copy; 2019</span>
			</div>
		);
	}
}

export default Footer;
