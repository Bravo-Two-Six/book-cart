import React, {Component} from 'react';

class Card extends Component {
	handleClink = () =>{
		alert("You have clicked on " + this.props.title + " Genre.")
	}
	render() {
		return (
			<div className="col-md-3">
				<div className={this.props.colour}>
					<div className="card-body">
						<h5><button className="bg-transparent border-0 text-white" onClick={this.handleClink}>{this.props.title}</button> </h5>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;