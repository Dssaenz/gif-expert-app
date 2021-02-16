import React from 'react'
// Dependencies
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Test in <GifExpertApp /> component', () => {

	test('It should display the component correctly', () => {

		const categories = ['Hola', 'Mundo'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length)
		expect(wrapper.find('AddCategory')).toEqual({});
	})
})