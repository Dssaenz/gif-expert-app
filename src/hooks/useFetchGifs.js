import { useEffect, useState } from "react"
import getCategories from "../helpers/getGifs";

const useFetchGifs = (categories) => {
	const [ state, setState ] = useState({
		data: [],
		loading: true,
	})

	useEffect(() => {
		getCategories(categories).then(items => setState({
			data: items,
			loading: false
		}))
	}, [categories])

	return state;
}

export default useFetchGifs