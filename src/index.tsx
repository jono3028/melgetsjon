import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./css/style.css";

import { Main } from "./components/Main";
import { GalleryPage } from "./components/GalleryPage";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

ReactDOM.render(
	(
		<Router basename={baseUrl}>
			<React.Fragment>
				<Route exact path="/" component={Main}/>
				<Route path="/gallery/:imageSet" component={GalleryPage} />
			</React.Fragment>
		</Router>
	),
	document.getElementById("root")
);
