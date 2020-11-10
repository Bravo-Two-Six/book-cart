import React, {Component} from 'react';
import Carousel from "./Carousel";
import Card from "./Card";
class Index extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<br/>
				<div className="container" >
					<h3 className="text-white">Browse Genres</h3>
					<hr/>
					<div className="row" style={{padding:"10px"}}>
						<Card title={"Romance"} colour={"card text-white bg-night-sky"} />
						<Card title={"Action & Adventure"} colour={"card text-dark bg-sunny-morning"}/>
						<Card title={"Mystery & Thriller"} colour={"card text-white bg-grow-early"}/>
						<Card title={"Biographies & History"} colour={"card text-white bg-malibu-beach"}/>
					</div>
					<div className="row" style={{padding:"10px"}}>
						<Card title={"Children's"} colour={"card text-white bg-night-sky"} />
						<Card title={"Young Adult"} colour={"card text-dark bg-sunny-morning"}/>
						<Card title={"Fantasy"} colour={"card text-white bg-grow-early"}/>
						<Card title={"Historical Fiction"} colour={"card text-white bg-malibu-beach"}/>
					</div>
					<div className="row" style={{padding:"10px"}}>
						<Card title={"Horror"} colour={"card text-white bg-night-sky"} />
						<Card title={"Literary Fiction"} colour={"card text-dark bg-sunny-morning"}/>
						<Card title={"Non-Fiction"} colour={"card text-white bg-grow-early"}/>
						<Card title={"Science Fiction"} colour={"card text-white bg-malibu-beach"}/>
				</div>
				</div>
			</div>
		);
	}
}

export default Index;