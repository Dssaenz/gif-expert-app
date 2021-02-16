import React from 'react'
import '@testing-library/jest-dom';
import Gifgrid from '../../components/gif-grid'
import { shallow } from 'enzyme';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid /> component', () => {
	const categories = '';

	test('It should display the component correctly', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		})

		const wrapper = shallow(<Gifgrid categories={categories} />)
		expect( wrapper ).toMatchSnapshot();
	})


	test('Should display items when images useFetchGifs is fill', () => {

		const gifs = [{
			id: '123',
			title: 'https://localhost/cosa.png',
			url: 'una cosa'
		}]
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		})

		const wrapper = shallow(<Gifgrid categories={categories} />)

		// Exists 'h1' element
		expect( wrapper.find('h1').exists() ).toBe(false);

		// Number of the element
		expect( wrapper.find('GifGridItem').length).toBe(gifs.length);
	})
})