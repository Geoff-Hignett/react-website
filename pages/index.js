import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";

export async function getStaticProps() {
	const latestThreePosts = getSortedPostsData().filter((word, index) => index < 3);
	return {
		props: {
			latestThreePosts,
		},
	};
}

export default function Home({ latestThreePosts }) {
	return (
		<>
			<Head>
				<title>Geoff Hignett - Front End Web Developer</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* hero */}
			<div className="h-96 bg-home-hero bg-cover bg-no-repeat relative">
				<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
				<div className="max-w-theme h-full mx-auto flex items-center justify-between px-3">
					<div className="w-full lg:w-1/3 font-poppins text-lg text-white relative">
						<h1 className="text-5xl uppercase mb-5">Geoff Hignett</h1>
						<p>Welcome to my website!</p>
					</div>
					<div className="w-2/3 relative h-full hidden lg:block">
						<div className="absolute flex flex-col justify-between h-[120%] w-96 -top-[10%] right-0 2xl:-right-[10%] bg-primary p-10">
							<div className="absolute top-50 h-7 w-7 bg-primary inset-y-1/2 -left-3 rotate-45 -translate-y-1/2"></div>
							{latestThreePosts.map(({ id, date, title }) => (
								<Link key={title} href={`/blog/${id}`} className="border-b-2 border-dotted cursor-pointer hero-post mb-12">
									<p className="font-courgette text-white mb-3">
										By Geoff Hignett <span className="text-black font-poppins font-bold">{`- ${date}`}</span>
									</p>
									<p className="font-poppins text-white uppercase font-bold h-[4.5rem]">{title}</p>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* latest posts */}
			<div className="max-w-theme mx-auto pt-10 lg:pt-20 lg:pb-10 px-3">
				<h2 className="font-poppins text-xl font-bold mb-5 md:text-center">Latest Blog Posts</h2>
				<div className="flex flex-wrap flex-col md:flex-row justify-between ">
					{latestThreePosts.map(({ id, imagePath, category, date, extract, title }) => (
						<div key={id} className="w-full md:w-[48%] lg:w-[30%] mb-10">
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
						</div>
					))}
				</div>
			</div>
		</>
	);
}
