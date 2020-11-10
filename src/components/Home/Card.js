import React, {Component} from 'react';

class Card extends Component {
	render() {
		return (
			<div className="col-md-3">
				<div className={this.props.colour}>
					<div className="card-body">
						<h5>{this.props.title}</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;