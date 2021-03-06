import React from "react";
import Layout from "../Layout";
import Header from "./Header";
import FeatureSection from "./FeatureSection";
import Mission from "./Mission";
import About from "./About";
import Contact from "./Contact";
import Footer from "../Layout/Footer";

const Homepage = () => {
	const data = [
		{
			icon: "",
			image: `'/Video.png'`,
			color: `md:bg-blue`,
			colorCode: `#59a0d3`,
			title: "Video based learning",
			description:
				"Video explanation on topics like aptitude, verbal, logical, programming  languages and general communication skills by respective experts",
			points: [
				"Explanation of each subtopic with examples",
				"Shortcuts and tricks to solve problems instead of generic ways",
				"A pdf file of Important formulae, short cut methods for every subtopic.",
			],
		},
		{
			icon: "",
			image: "/AI.png",
			color: `md:bg-green`,
			colorCode: `#6dc56c`,
			title: "AI powered tests and reports",
			description:
				"Monthly and weekly tests are conducted to test the performance of students and reports of the same are sent to both faculty and students.",
			points: [
				"Company specific mock tests are conducted",
				"Insightful reports driven by AI gets generated based on their performance",
				"Targeted training to students based on their results is assisted.",
			],
		},
		{
			icon: "",
			image: "/placement.png",
			color: "md:bg-red",
			colorCode: `#d07171`,
			title: "Placement Opportunities",
			description:
				"An opportunity to attend drives directly based on their monthly tests performance.",
			points: [
				"Get a chance to interview with the company",
				"Talk to industry experts virtually",
				"Company specific interviews are conducted by experts.",
			],
		},
	];
	return (
		<Layout>
			<main className="homepage scroll-smooth snap-y snap-mandatory overflow-scroll">
				<Header />
				{data.map((feature) => (
					<FeatureSection key={feature.title} feature={feature} />
				))}
				<Mission />
				<About />
				<Contact />
				<Footer />
			</main>
		</Layout>
	);
};

export default Homepage;
