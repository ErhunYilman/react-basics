import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	render() {
		return(
		    // je kan hier geen geen meerdere elementen terug gevenn
		    <div className="container">
                {/* leg iets uit over classses */}
                <div className="row">
                    <div className="col-sm">
                        <h1>HTML in JavaScript whaaat??</h1>
                    </div>
                </div>
			</div>
		)
	}
}

render (<App/>, window.document.getElementById("app"))