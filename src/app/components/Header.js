import React from "react"

// leg iets uit warm je hier geen render gebruikt
export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar nav">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}