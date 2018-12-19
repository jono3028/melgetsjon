import * as React from "react";
import { Link } from "react-router-dom";

export class Main extends React.Component<{}, {}> {
	render() {
		
		return (
			<section className="main_container">
				<div className="floater_1">
					<h1>Thank You</h1>
					<p>A big thank you to everyone who helped make our special day great!</p>
				</div>
				<div className="floater_2">
					<Link to="/gallery/booth">Photo Booth Photos</Link>
					<Link to="/gallery/professional" >Photographer Photos</Link>
				</div>
			</section>
    )
	}
}
