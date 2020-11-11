import React, { Component } from 'react'
import Card from './Card'

class Genre extends Component {
    render() {
        return (
            <div>
                <h3 className="text-white">Browse Genres</h3>
					<hr/>
					<div className="row" style={{padding:"10px"}}>
						<Card title={"Romance"} colour={"card text-white bg-love-kiss"} />
						<Card title={"Action & Adventure"} colour={"card text-dark bg-sunny-morning"}/>
						<Card title={"Mystery & Thriller"} colour={"card text-white bg-strong-bliss"}/>
						<Card title={"Biographies & History"} colour={"card text-white bg-focus"}/>
					</div>
					<div className="row" style={{padding:"10px"}}>
						<Card title={"Children's"} colour={"card text-white bg-night-sky"} />
						<Card title={"Young Adult"} colour={"card text-dark bg-mean-fruit"}/>
						<Card title={"Fantasy"} colour={"card text-white bg-midnight-bloom"}/>
						<Card title={"Historical Fiction"} colour={"card text-white bg-mixed-hopes"}/>
					</div>
					<div className="row" style={{padding:"10px"}}>
						<Card title={"Horror"} colour={"card text-white bg-plum-plate"} />
						<Card title={"Literary Fiction"} colour={"card text-dark bg-ripe-malin"}/>
						<Card title={"Non-Fiction"} colour={"card text-white bg-royal"}/> 
						<Card title={"Science Fiction"} colour={"card text-white bg-warm-flame"}/>
				</div>
            </div>
        )
    }
}

export default Genre;