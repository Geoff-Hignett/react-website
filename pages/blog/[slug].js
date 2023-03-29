import SectionBanner from "@/components/sectionBanner";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Image from "next/image";
import styles from './[slug].module.css'

// The page for each post
export default function Post({ frontmatter, content }) {
	const { title, category, date, heroImage, mins, lead } = frontmatter;

	return (
		<>
			<section className="max-w-themeSmall mx-auto">
				<Image className="mb-8" src={heroImage} width={770} height={393} alt="" />
				<div className="flex flex-col items-center">
					<h1 className="text-xl font-poppins font-bold mb-2">{title}</h1>
					<div className="flex items-center mb-6">
						<p className="">{date}</p>
						<div className="h-1 w-1 rounded-full bg-black mx-3"></div>
						<p>{mins} mins</p>
						<div className="h-1 w-1 rounded-full bg-black mx-3"></div>
						<p>{category}</p>
					</div>
					<Image className="mb-5" src="/bolt.jpg" width={50} height={10} alt="" />
				</div>
				<h3 className="font-poppins text-lg font-bold mb-8 text-center">{lead}</h3>
				<div className={styles.blog} dangerouslySetInnerHTML={{ __html: md().render(content) }} />
			</section>
		</>
	);
}

// Generating the paths for each post
export async function getStaticPaths() {
	// Get list of all files from our posts directory
	const files = fs.readdirSync("posts");
	// Generate a path for each one
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(".md", ""),
		},
	}));
	// return list of paths
	return {
		paths,
		fallback: false,
	};
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
	const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content,
		},
	};
}
