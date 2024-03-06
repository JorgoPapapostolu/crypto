<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>CRYPTO TRACKER</title>
</svelte:head>

<section>
	<h1>
		WELCOME to <br />CRYPTO-TRACKER
	</h1>

	<div>
		{JSON.stringify(data)}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-size: 3em;
		color: #000000;
		text-align: center;
		margin: 0;
		padding: 20px;
		background-color: #b8b8b8;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
