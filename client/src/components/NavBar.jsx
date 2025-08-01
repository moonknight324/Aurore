// import React from "react";
// import { Link } from "react-router-dom";
import nav from "../Styles/NavBar.module.css";

const NavBar = () => {
	return (
		<header className={nav.mainNav}>
			<nav className={nav.leftNav}>
				<h1>Aurore</h1>
			</nav>
			<nav className={nav.rightNav}>
				<div>
					<h2>
						<b>Explore</b>
					</h2>
				</div>
				<div>
					<h2>
						<b>Posts</b>
					</h2>
				</div>
				<div>
					<button>Create Post</button>
				</div>
				<div></div>
			</nav>
		</header>
	);
};

export default NavBar;
