import React from "react"
import Profile from "../images/octocat.png"

function Main(){
	return(
			<div>
				<div className="main">
					<img src={Profile} alt="Profile"/>
					<h2>I'm Honey Patel</h2>
					<p>ICT Engineer. Self-taught Python Programmer and Web-Developer.</p>
				</div>
			</div>
		)
}

export default Main