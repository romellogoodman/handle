<script>
	let count = 6;

	const items = new Array(count * count);
</script>

<main style="--grid: {3};">
	{#each items as item}
		<div class="item" />
	{/each}
</main>

<style lang="scss">
	main {
		padding: 32px;
		display: grid;
		grid-template-columns: repeat(var(--grid), 1fr);
		gap: 8px;
		background-color: pink;
	}

	.item {
		aspect-ratio: 1/1;
		background-color: aqua;
	}
</style>
