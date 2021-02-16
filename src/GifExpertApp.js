import React, { useState } from 'react'

import AddCategory from './components/add-category'
import GifGrid from './components/gif-grid'

const GifExpertApp = ({ defaultCategories = [] }) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<h2>gif expert app</h2>
			<br />
			<AddCategory setCategories={setCategories} />
			{categories.map(item => (
				<GifGrid
					key={item}
					categories={item}
				/>
			))}
		</>
	)
}

export default GifExpertApp