import React, { useState } from "react";

export default function Part2() {
	const [state, setState] = useState(false);

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
