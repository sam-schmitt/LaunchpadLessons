import React, { useState } from "react";
import MaterialUI from "@material-ui/core";

export default function Part3() {
	const [state, setState] = useState(false);

	function toggleState() {
		setState(!state);
	}

	return (
		<MaterialUI.Container>
			<MaterialUI.Typography variant='h1'>Hello World</MaterialUI.Typography>
			<MaterialUI.Button onClick={toggleState}>Toggle</MaterialUI.Button>
		</MaterialUI.Container>
	);
}
