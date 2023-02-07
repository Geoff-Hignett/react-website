import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import SectionBanner from "@/components/sectionBanner";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

const Blog = ({ allPostsData }) => {
	const categories = [
		{
			name: "Category 1",
			active: true,
			posts: 3,
		},
		{
			name: "Category 2",
			active: false,
			posts: 2,
		},
		{
			name: "Category 3",
			active: false,
			posts: 5,
		},
		{
			name: "Category 4",
			active: false,
			posts: 8,
		},
		{
			name: "Category 5",
			active: false,
			posts: 2,
		},
		{
			name: "Category 6",
			active: false,
			posts: 1,
		},
	];

	return (
		<>
			<SectionBanner title="blog" />
			<section className="max-w-theme mx-auto py-10 lg:py-20 px-3">
				<div className="flex">
					<div className="w-full lg:w-2/3 lg:pr-4">
						<ul className="">
							{allPostsData.map(({ id, date, title, imagePath, extract }) => (
								<li className="flex flex-col lg:flex-row mb-8 relative" key={id}>
									<Image className="mr-5" src={imagePath} fill alt="" />
									<div className="relative">
										<h2 className="font-poppins text-xl font-bold text-offBlack mb-2">{title}</h2>
										<p className="font-poppins mb-4">{extract}</p>
										<p className="font-courgette text-fontGrey absolute left-0 bottom-0">
											Posted on - <span className="font-poppins text-primary font-bold">{date}</span>
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="w-1/3 pl-4 hidden lg:block">
						<div className="border-4 border-greyAlt px-10 py-16 relative">
							<div className="absolute left-1/2 -top-3 -translate-x-1/2 z-10 w-3/5 border-l-4 border-r-4 border-greyAlt bg-white flex items-center justify-center font-poppins font-bold text-lg">
								Categories
							</div>
							<ul className="flex flex-col">
								{categories.map((category, index) => (
									<li className={`flex justify-between border-2 border-dashed mb-3 pl-8 py-1 pr-1 cursor-pointer ${category.active && "border-primary"}`} key={index}>
										<h3 className="font-courgette my-3">{category.name}</h3>
										<div className={`flex items-center justify-center h-12 w-12 ${category.active ? "bg-primary text-white" : ""}`}>{category.posts}</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Blog;
