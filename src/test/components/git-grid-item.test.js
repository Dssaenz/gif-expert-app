import React from 'react'
// Dependencies
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

//Components
import GifGridItem from '../../components/git-grid-item';

describe('Test in <GifGridItem /> component' , () => {

	const title = 'Default title';
	const url = 'https://localhost/algo.jpg';
	const wrapper = shallow(<GifGridItem title={title} url={url} />)

	test('It should display the component correctly', () => {
		expect( wrapper ).toMatchSnapshot();
	})

	test('It should have a text with the title', () => {
		const p = wrapper.find('p');
		expect( p.text().trim() ).toBe(title);
	})

	test(`It should have a text equal to 'url' and 'alt' form the props`, () => {
		const img = wrapper.find('img');

		// whit the prop method we get the props from component
		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	})

	test('It should have an animate__fadeIn class', () => {
		const div = wrapper.find('div');
		const className = div.prop('className');

		expect( className.includes('animate__fadeIn') ).toBe(true);
	})
})