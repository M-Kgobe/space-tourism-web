import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../logo.svg'

function Layout() {
    return (
			<>
				<header className="header">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<hr />
					<nav className="navBar">
						<ul className="navLinks">
							<li>
								<Link to="/"><span className="linkNum">00</span> Home</Link>
							</li>
							<li>
								<Link to ='/destinations'><span className="linkNum">01</span> Destination</Link>
							</li>
							<li>
								<Link to='./crew'><span className="linkNum">02</span> Crew</Link>
							</li>
							<li>
								<Link to='/technology'><span className="linkNum">03</span> Technology</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Outlet />
			</>
		);
}

export default Layout;
