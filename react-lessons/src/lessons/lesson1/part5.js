import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Part5() {
	const [state, setState] = useState(false);

	function toggleState() {
		setState(!state);
	}

	return (
		<Container>
			<Typography variant='h1'>Hello World</Typography>
			<Button onClick={toggleState}>Toggle</Button>
		</Container>
	);
}
