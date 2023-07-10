import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'My Awesome Project',
	description: 'A VitePress Site',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		editLink: {
			pattern:
				'https://github.com/faustbrian/vitepress-template/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Installation', link: '/installation' },
			{ text: 'Configuration', link: '/configuration' },
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' },
				],
			},
		],

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/faustbrian/vitepress-template',
			},
		],

		search: {
			provider: 'local',
		},
	},
});
