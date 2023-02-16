import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [mobileNavActive, setMobileNavActive] = useState(false);
	const menuItems = ["Home", "Blog", "About"];

	const handleMobileNav = () => {
		setMobileNavActive((mobileNavActive) => !mobileNavActive);
	};

	return (
		<>
			<nav className="bg-black w-full">
				<div className="max-w-theme mx-auto flex items-center justify-between py-5 px-3">
					<ul className="hidden md:flex">
						{menuItems.map((item, index) => (
							<li key={index} className="text-white font-poppins mr-12">
								<Link href={`${item === "Home" ? "/" : "/" + item.toLowerCase()}`}>{item}</Link>
							</li>
						))}
					</ul>
					<div onClick={handleMobileNav} className="flex flex-col justify-between w-8 h-6 cursor-pointer opacity-100 md:hidden">
						<div className={`bg-white w-full h-3 transition duration-500 rounded-full ${mobileNavActive ? "rotate-43 origin-left" : ""}`}></div>
						<div className={`bg-white w-full h-3 transition duration-500 rounded-full ${mobileNavActive ? "opacity-0" : ""}`}></div>
						<div className={`bg-white w-full h-3 transition duration-500 rounded-full ${mobileNavActive ? "-rotate-43 origin-left" : ""}`}></div>
					</div>
					<ul className="flex">
						<li>
							<Image className="mr-5 cursor-pointer" src="/icons/linkedin.svg" width={34} height={34} alt="" />
						</li>
						<li>
							<Image className="mr-5 cursor-pointer" src="/icons/github.svg" width={34} height={34} alt="" />
						</li>
					</ul>
				</div>
			</nav>
			<nav
				className={`fixed top-[64px] left-0 w-full h-[calc(100%_-_64px)] z-10 flex justify-center text-center bg-white transition duration-500 md:hidden ${
					mobileNavActive ? "" : "-translate-x-[40rem]"
				}`}
			>
				<ul className="flex flex-col mt-5">
					{menuItems.map((item, index) => (
						<li key={index} className="font-poppins mb-5">
							<Link href={`${item === "Home" ? "/" : "/" + item.toLowerCase()}`}>{item}</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
