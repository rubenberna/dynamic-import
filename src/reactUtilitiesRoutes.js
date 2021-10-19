import { buildComponent } from "./buildComponent";

const useAsyncArticle = {
	title: "The Power and Convenience of useAsync",
	paragraphs: [
		"How do you make async calls in React? Do you use axios, fetch, or even " +
		"GraphQL?",
		"In that case, you should be familiar with getting data for a successful " +
		"call, and receiving an error for a failed call. Likely, you also need to " +
		"track the loading status to show pending state.",
		"Have you considered wrapping them with a custom Hook?",
		"All of these have been accomplished by react-async, a utility belt for " +
		"declarative promise resolution and data fetching. We are going to show you " +
		"how easy it is to use this powerful react-async.",
	],
};

const reactTableArticle = {
	title: "An Introduction to React-Table",
	paragraphs: [
		"A table, also called a data grid, is an arrangement of data in rows and " +
		"columns, or possibly in a more complex structure. It is an essential " +
		"building block of a user interface. I’ve built tables using Java Swing, " +
		"ExtJs, Angular, and React. I’ve also used a number of third party tables. " +
		"As a UI developer, there’s no escape from table components.",
		"Build vs. buy? It is always a choice between cost and control. When there " +
		"is an open-source with a proven track record, the choice becomes a " +
		"no-brainer.",
		"I would recommend using React Table, which provides a utility belt for " +
		"lightweight, fast, and extendable data grids. This project started in " +
		"October, 2016, with hundreds of contributors and tens of thousands of " +
		"stars. It presents a custom hook, useTable, which implements row sorting, " +
		"filtering, searching, pagination, row selection, infinity scrolling, and " +
		"many more features.",
	],
};

const UseAsyncComponent = () => buildComponent(useAsyncArticle);
const ReactTableComponent = () => buildComponent(reactTableArticle);

export const currentRoutes = [
	{
		path: "/useAsync",
		name: useAsyncArticle.title,
		component: UseAsyncComponent,
	},
	{
		path: "/reactTable",
		name: reactTableArticle.title,
		component: ReactTableComponent,
	},
];
