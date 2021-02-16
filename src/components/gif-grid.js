import React from 'react'
import PropTypes from 'prop-types';
import GifGridItem from './git-grid-item';
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ categories }) => {

	const { data: images, loading } = useFetchGifs(categories)

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

GifGrid.propTypes = {
	categories: PropTypes.string.isRequired,
}

export default GifGrid