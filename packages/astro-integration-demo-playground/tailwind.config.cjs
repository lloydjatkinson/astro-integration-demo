module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms')({
			// strategy: 'base', // only generate global styles
			strategy: 'class', // only generate classes
		}),
	],
}
