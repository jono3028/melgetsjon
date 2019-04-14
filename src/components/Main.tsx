import * as React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

export class Main extends React.Component<{}, {}> {
	render() {
		
		return (
			<div className="main_container">
				<section className="main_section">
					<div className="main_row1">
						<h1>Thank You</h1>
						<p>A big thank you to everyone who helped make our special day great!</p>
					</div>
					<div className="main_row2">
						<Link className="main_link" to="/gallery/booth">Photo Booth Photos</Link>
						<Link className="main_link" to="/gallery/professional" >Photographer Photos</Link>
					</div>
				</section>
			</div>
    )
	}
}
