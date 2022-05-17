const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#003580',
      primaryHover: '#0071c2',
			dark: '#1D182E',
      darkHover: '#4a3f70',
			...colors,
		},
		extend: {},
    fontFamily: {
      tajawal: ["Tajawal", 'sans-serif'],
      lobster: ["Lobster", 'cursive']
    }

	},
	plugins: [],
};
