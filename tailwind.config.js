/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "Arial", "sans-serif"],
				courgette: ["Courgette", "Arial", "sans-serif"],
			},
			colors: {
				black: "#1f1f1f",
				primary: "#1ebd9d",
				grey: "#f6f6f6",
				greyAlt: "#666666",
				offBlack: "#333333",
				fontGrey: "#666666",
			},
			maxWidth: {
				theme: "1200px",
				themeSmall: "800px",
			},
			height: {
				3: "3px",
			},
			rotate: {
				43: "43deg",
			},
			backgroundImage: {
				"home-hero": "url('../public/matrix.jpg')",
			},
			fontSize: {
				xl: "1.375rem",
			},
			distance: {
				3: "13px",
			},
		},
	},
	plugins: [],
};
