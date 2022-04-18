import { readFileSync } from 'node:fs';

export default function example() {
	/** @type {import('astro').AstroIntegration} */
	const integration = {
		name: '@lloydjatkinson/astro-integration-demo',
		hooks: {
			'astro:config:setup': ({ config, updateConfig, injectScript, injectElement }) => {
                injectScript(
                    'head-inline',
                    readFileSync(new URL('./external-load-shim.js', import.meta.url), { encoding: 'utf-8' }),
                );

                // Examples from other integrations:
				// updateConfig({ markdown: { rehypePlugins, remarkPlugins } });
				// Auto-import the embed components and attach them to the global scope
				// injectScript(
				// 	'page-ssr',
				// 	`import * as ${importNamespace} from "astro-embed"; global.${importNamespace} = ${importNamespace};`
				// );
			},
		},
	};

	return integration;
}