import React, { useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";

export default function Part4() {
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
