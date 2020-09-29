import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories }) => {
	const [inputValues, setInputValues] = useState('')

	const handleValue = e => {
		setInputValues(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if(inputValues.trim().length > 2){
			setCategories(cat => [ inputValues, ...cat ])
			setInputValues('')
		}
	}

	return(
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValues}
				onChange={handleValue}
			/>
	</form>
	)
}

AddCategory.propsTypes = {
	setCategories: PropTypes.func.isRequired
}

export default AddCategory