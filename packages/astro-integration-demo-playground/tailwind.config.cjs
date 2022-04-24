module.exports = {
	content: [
		'../packages/astro-integration-demo-design-system/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'../astro-integration-demo-design-system/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

// module.exports = {
// 	content: [
// 	  "../packages/ui/**/*.{js,ts,jsx,tsx}"
// 	  ...
// 	],
// 	...
//   }