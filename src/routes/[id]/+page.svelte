<script>
	import HtmlRenderer from '$lib/components/HTMLRenderer.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	/** @type {import('./$types').PageData} */
	export let data;

	const source = data.markdown;
</script>

<SvelteMarkdown {source} renderers={{ html: HtmlRenderer }} />
