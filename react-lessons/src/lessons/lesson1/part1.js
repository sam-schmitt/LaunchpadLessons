import React from "react";

export default function Part1() {
	const [state, setState] = React.useState(false);

	function toggleState() {
		setState(!state);
	}

	return (
		<div>
			<h1>Hello World</h1>
			<button onClick={toggleState}>Toggle</button>
		</div>
	);
}
