import { getSortedPostsData } from "@/lib/posts";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

const Test = () => {
	return <div>test pages</div>;
};

export default Test;
