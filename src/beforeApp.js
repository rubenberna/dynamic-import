import React, { useState, useMemo, useCallback } from "react";
import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import Select from "react-select";
import { currentRoutes as mfaRoutes } from "./microFrontendRoutes";
import { currentRoutes as utilRoutes } from "./reactUtilitiesRoutes";
import "./App.css";

const App = () => {
	const [topic, setTopic] = useState("");
	const [routes, setRoutes] = useState([]);

	const selectOptions = useMemo(
		() => [
			{
				value: "mfa",
				label: "Micro Frontends",
			},
			{
				value: "util",
				label: "React Utilities",
			},
		],
		[]
	);

	const routeMapping = useMemo(
		() => ({
			mfa: mfaRoutes,
			util: utilRoutes,
		}),
		[]
	);

	const history = useHistory();

	const handleTopicChange = useCallback(
		(selected) => {
			setTopic(selected);
			setRoutes(routeMapping[selected.value]);
			history.push(`/`);
		},
		[history, routeMapping]
	);

	return (
		<div className="App">
			<h1>This is an example of static import</h1>
			<p>Jennifer's articles are initially loaded to be used.</p>
			<Select
				className="select-category"
				value={topic}
				options={selectOptions}
				onChange={handleTopicChange}
			/>
			<ul>
				{routes.map(({ path, name }) => (
					<li key={path}>
						<NavLink to={path}>{name}</NavLink>
					</li>
				))}
			</ul>

			<Switch>
				{routes.map(({ path, component }) => (
					<Route key={path} path={path} component={component} />
				))}
			</Switch>
		</div>
	);
};

export default App;
