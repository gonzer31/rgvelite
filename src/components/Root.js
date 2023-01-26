import NavBar from './NavBar.js';

export default function Root(props) {
	return (
		<div>
			<NavBar>
				{props.children}
			</NavBar>
		</div>
	);
}
