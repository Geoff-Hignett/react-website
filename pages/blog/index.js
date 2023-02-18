import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import SectionBanner from "@/components/sectionBanner";
import Link from "next/link";


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
			<section className="max-w-theme mx-auto pt-10 lg:py-20 lg:pb-10 px-3">
				<div className="flex">
					<div className="w-full md:w-1/2 lg:w-2/3 lg:pr-4">
						<ul className="flex flex-wrap justify-between">
							{allPostsData.map(({ id, imagePath, category, date, extract, title }) => (
							<li key={id} className="w-full md:w-full lg:w-[48%] mb-10">
								<div className="relative sm:h-[23vh] h-[275px]">
									<Image className="absolute bottom-0 left-0 object-cover" src={imagePath} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="" />
									<div className="absolute -bottom-5 left-8 bg-black p-3">
										<p className="text-primary font-courgette">
											Posted In:
											<span className="text-white">{` ${category}`}</span>
										</p>
									</div>
									<div className="absolute top-3 right-3 bg-black p-3">
										<p className="font-courgette text-primary ont-bold">{date}</p>
									</div>
								</div>
								<p className="mb-3 uppercase font-bold mt-10">{title}</p>
								<p className="mb-3">{extract}</p>
								<Link className="font-courgette text-primary font-bold" href={`/blog/${id}`}>
									Continue Reading
								</Link>
							</li>
							))}
						</ul>
					</div>
					<div className="md:w-1/2 lg:w-1/3 pl-4 hidden md:block">
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
