import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const API_URL =
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,cardano,ethereum&vs_currencies=usd';

	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error('Fehler beim Abrufen der Daten');
		}

		const data = await response.json();
		const bitcoinPrice = data.bitcoin.usd;
		const ethereumPrice = data.ethereum.usd;
		const cardanoPrice = data.cardano.usd;

		return { bitcoinPrice, ethereumPrice, cardanoPrice };
	} catch (error) {
		console.error('Fehler:', error);
		return { error: 'Fehler beim Abrufen der Daten' };
	}
};
