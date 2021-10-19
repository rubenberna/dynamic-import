import { buildComponent } from "./buildComponent";

const fiveStepsArticle = {
	title: "5 Steps to Turn a Random React Application Into a Micro Front-End",
	paragraphs: [
		"What is a micro front-ends approach? The term micro front-ends first came " +
		"up in the ThoughtWorks Technology Radar in November 2016. It extends the " +
		"concepts of microservices to front-end development.",
		"The approach is to split the browser-based code into micro front-ends by " +
		"breaking down application features. By making smaller and feature-centered " +
		"codebases, we achieve the software development goal of decoupling.",
		"Although the codebases are decoupled, the user experiences are coherent. " +
		"In addition, each codebase can be implemented, upgraded, updated, and " +
		"deployed independently.",
	],
};

const ecoSystemArticle = {
	title: "Build Your Own Micro-Frontend Ecosystem",
	paragraphs: [
		"Micro-frontend architecture is a design approach. It modularizes a " +
		"monolithic application into multiple independent smaller applications, " +
		"which are called micro-frontends. Micro-frontends can also be spelled as " +
		"micro front-ends, micro frontends, micro front ends, or microfrontends.",
		"The goal of the micro-frontend approach is decoupling. It allows each " +
		"micro-frontend to be independently implemented, tested, upgraded, updated, " +
		"and deployed. A thin micro-frontend container launches multiple " +
		"micro-frontends.",
	],
};

const FiveStepsComponent = () => buildComponent(fiveStepsArticle);
const EcoSystemComponent = () => buildComponent(ecoSystemArticle);

export const currentRoutes = [
	{ path: "/5steps", name: fiveStepsArticle.title, component: FiveStepsComponent },
	{ path: "/3steps", name: ecoSystemArticle.title, component: EcoSystemComponent },
];
