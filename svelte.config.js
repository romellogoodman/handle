import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export const config = {
	preprocess: preprocess({}),
	kit: {
		adapter: adapter()
	}
};

export default config;
