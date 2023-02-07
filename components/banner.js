import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="px-3">
				<Image className="mx-auto" src="/logo.svg" width={150} height={100} alt="" />
			</div>
		</>
	);
};

export default Banner;
