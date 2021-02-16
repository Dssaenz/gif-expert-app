import React from 'react';
import AddCategory from '../../components/add-category';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Test in <AddCategory /> component', () => {
	const setCategories = jest.fn();

	let wrapper = shallow(<AddCategory setCategories={setCategories} />)

	beforeEach(()=> {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />)
	})

	test('It should display the component correctly', () => {
		expect( wrapper ).toMatchSnapshot();
	})

	test('It should change the input', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo';

			input.simulate('change', { target: { value }});
			expect( wrapper.find('p').text().trim()).toBe(value);
	})

	test(`It shouldn't post the information with submit`, () => {
		const submit = wrapper.find('form');
		submit.simulate('submit', { preventDefault: () => {} })
		expect(setCategories).not.toHaveBeenCalled();
	})

	test(`Should call setCategories and have values in ''`, () => {
	const input = wrapper.find('input');
	const submit = wrapper.find('form');
	const value = 'hola mundo';

		input.simulate('change', { target: { value }});
		submit.simulate('submit', { preventDefault: setCategories })

		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledTimes(1);
		// expect(setCategories).toHaveBeenCalledWith( expect.any(Function));

		expect(input.prop('value')).toBe('');

	})
})