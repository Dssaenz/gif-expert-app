import React, { useEffect, useState } from 'react'
import GifGridItem from './git-grid-item'
import getCategories from '../helpers/getGifs'

const GifGrid = ({ categories }) => {
	const base_url = 'https://api.giphy.com/v1/gifs/search'
	const api_key = 'api_key=FjUdYRb0xCLKqnCO2u78Z6P3xgKTRq4c'
	const q = `q=${encodeURI(categories)}`
	const limit = 'limit=10'
	const url = `${base_url}?${api_key}&${q}&${limit}`

	const [ gif, setGifs ] = useState([]);

	useEffect(() => {
		getCategories(url).then(setGifs)
	}, [categories, url])

	console.log(gif)
	return (
		<div className="card-grid">
			{categories}
			{gif.map((item) => (
				<GifGridItem key={item.id} title={item.title} url={item.url} />
			))}
		</div>
	)
}

export default GifGrid