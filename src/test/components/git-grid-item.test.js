import React from 'react'
// Dependencies
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

//Components
import GifGridItem from '../../components/git-grid-item';

describe('Test in <GifGridItem /> component' , () => {

	const title = 'Default title';
	const url = 'https://localhost/algo.jpg';

	test('It should display the component correctly', () => {
		const wrapper = shallow(<GifGridItem title={title} url={url} />)
		expect( wrapper ).toMatchSnapshot();
	})
})