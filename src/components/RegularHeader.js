import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
	render() {
	    return (
			<header className="mdl-layout__header mdl-layout--fixed-header">
			    <div id="header-row" className="mdl-layout__header-row">
			      <div className="mdl-layout__drawer-button">
					<i className="material-icons">menu</i>
				  </div>
				  <a href="/" className="mdl-layout-title header-font-small link white"><span itemProp="name">RGV Elite Tennis Academy</span></a>
			    </div>
			    <div id="header-row2" className="mdl-layout__header-row mdl-layout--large-screen-only mdl-layout--no-drawer-button center">
			      {/* Add spacer, to align navigation to the right
			      			<div id="layout-spacer" className="mdl-layout-spacer"></div>*/}
			      {/* Navigation. We hide it in small screens.*/}
			      <nav className="mdl-navigation">
					<Link to={"/"}   className="mdl-navigation__link">Home</Link>
					<Link to={"/about-us"}     className="mdl-navigation__link">About Us</Link>
			      	<Link to={"/programs"}   className="mdl-navigation__link">Programs</Link>
					{/* <Link to={"/summer-camp"}   className="mdl-navigation__link">Summer Camp</Link> */}
			        {/* <Link to={"/tournaments"} className="mdl-navigation__link">Tournaments</Link> */}
					{/* <Link to={"/rankings"}    className="mdl-navigation__link">Rankings</Link> */}
					<Link to={"/strategies"}    className="mdl-navigation__link">Strategies</Link>
			        <Link to={"/gallery"}     className="mdl-navigation__link">Gallery</Link>
			      </nav>
			    </div>
			</header>
		);
	}
}
