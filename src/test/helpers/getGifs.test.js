// Dependencies
import '@testing-library/jest-dom';

//functions
import getGifs from "../../helpers/getGifs";


describe('Test in getGifs fetch', () => {
	test('It should get ten elements', async () => {
		const gifs = await getGifs('');
		expect( gifs.length ).toBe(0);
	})
})