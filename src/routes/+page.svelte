<script lang="ts">
	import type { PageData } from './$types';
	import logoBTC from '$lib/images/bitcoin-btc-logo.svg';
	import logoETH from '$lib/images/ethereum-eth.svg';
	import logoADA from '$lib/images/cardano.svg';

	export let data: PageData;

	// Funktion zur Formatierung des Bitcoin-Preises
	function formatCryptoPrice(price: number): string {
		return price.toLocaleString('de-DE', { style: 'currency', currency: 'USD' });
	}
</script>

<section>
	<h1>
		WELCOME to <br />CRYPTO-TRACKER
	</h1>

	{#if data.bitcoinPrice}
		<p>
			<img
				src={logoBTC}
				alt="BTC"
				style="vertical-align: middle; width: 32px; height: 32px; margin-right: 8px;"
			/>
			{formatCryptoPrice(data.bitcoinPrice)}
		</p>

		<p>
			<img
				src={logoETH}
				alt="ETH"
				style="vertical-align: middle; width: 32px; height: 32px; margin-right: 8px;"
			/>
			{formatCryptoPrice(data.ethereumPrice)}
		</p>

		<p>
			<img
				src={logoADA}
				alt="ADA"
				style="vertical-align: middle; width: 32px; height: 32px; margin-right: 8px;"
			/>
			{formatCryptoPrice(data.cardanoPrice)}
		</p>
	{:else}
		<p>Lade...</p>
	{/if}
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
		margin-bottom: 1;
		padding: 20px;
		background-color: #b8b8b8;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	p {
		font-size: 1.5em;
		text-align: center;
		margin-top: 0;
		padding: 20px;
		background-color: #8ce48471;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
