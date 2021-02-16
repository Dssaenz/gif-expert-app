import '@testing-library/jest-dom';
import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Test in useFetchGifs hook', () => {
	test('Should return an initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs());
		const { loading, data } = result.current;
		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBeTruthy();
	})

	test('Should return fill array and loading in false', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs());
		await waitForNextUpdate();
		const { loading, data } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false)
	})
})