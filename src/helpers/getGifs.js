const base_url = 'https://api.giphy.com/v1/gifs/search'
const api_key = 'api_key=FjUdYRb0xCLKqnCO2u78Z6P3xgKTRq4c'
const limit = 'limit=10'

const getCategories = async (categories) => {
	const q = `q=${encodeURI(categories)}`
	const url = `${base_url}?${api_key}&${q}&${limit}`
	const response = await fetch(url)
	const { data } = await response.json()
	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	})
	return gifs
}

export default getCategories