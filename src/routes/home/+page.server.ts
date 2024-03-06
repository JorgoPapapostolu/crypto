import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const API_URL = 'https://api.coingecko.com/api/v3/coins/list';

	interface CryptoPrice {
		id: string;
		symbol: string;
		name: string;
	}

	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error('Fehler beim Abrufen der Daten');
		}

		const data: CryptoPrice[] = await response.json();
		return { data: data };
	} catch (error) {
		console.error('Fehler:', error);
		return { error: 'Fehler beim Abrufen der Daten' };
	}
};
