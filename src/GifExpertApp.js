import React, { useState } from 'react'

import AddCategory from './components/add-category'
import GifGrid from './components/gif-grid'

const GifExpertApp = () => {
	const [categories, setCategories] = useState([])

	// const addCategory = () => {
	// Option 1
	//setCategories(categories.concat('Amarillo'))

	return (
		<>
			<AddCategory setCategories={setCategories} />
			<h2>gif expert app</h2>
			<br />
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