
import React, { useState, useMemo, useCallback } from "react";
import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import Select from "react-select";
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
			mfa: "microFrontendRoutes",
			util: "reactUtilitiesRoutes",
		}),
		[]
	);

	const history = useHistory();

	const handleTopicChange = useCallback(
		(selected) => {
			setTopic(selected);
			import("./" + routeMapping[selected.value]).then((module) => {
				setRoutes(module.currentRoutes);
			});
			history.push(`/`);
		},
		[history, routeMapping]
	);

	return (
		<div className="App">
			<h1>This is an example of dynamic loading</h1>
			<p>Jennifer's articles are not loaded until the category is selected.</p>
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
