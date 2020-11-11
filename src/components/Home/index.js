import React, {Component} from 'react';
import Genre from './Genre';
import Carousel from './Carousel';

class Index extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<br/>
				<div className="container" >
					<Genre />
				</div>
			</div>
		);
	}
}

export default Index;