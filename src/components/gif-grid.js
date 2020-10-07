import React from 'react'
import GifGridItem from './git-grid-item'
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ categories }) => {

	const { loading, data: images } = useFetchGifs(categories)

	if(loading){
		return <h1>Cargando...</h1>
	}
	return (
		<div className="card-grid">
			{categories}
			{images.map((image) => (
				<GifGridItem key={image.id} title={image.title} url={image.url} />
			))}
		</div>
	)
}

export default GifGrid