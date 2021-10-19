import React from "react";

export const buildComponent = ({title, paragraphs}) => (
	<>
		<h1>{title}</h1>
		{paragraphs.map((item, i) => (
			<p key={i}>{item}</p>
		))}
	</>
);
