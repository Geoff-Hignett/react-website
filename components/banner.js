import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="px-3">
				<Image className="mx-auto" src="/icons/gh.svg" width={150} height={150} alt="" />
			</div>
		</>
	);
};

export default Banner;
