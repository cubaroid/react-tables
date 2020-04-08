import React from 'react'
import classes from './Input.module.scss'

function isInvalid ({ valid, touched, shouldValidate }) {
		return !valid && shouldValidate && touched;
}

const Input = props => {
	const inputType = props.type || 'text'
	const cls = [classes.Input]
	const inputId = `${inputType}-${Math.random()}`

	if ( isInvalid(props) ) {
		cls.push(classes.Invalid)
	}

	return ( 
		<div className={cls.join(' ')}>
			<input 
				type={inputType} 
				placeholder={props.label}
				id={inputId}
				value={props.value}
				onChange={props.onChange}
				onFocus={(e) => e.target.placeholder = ''}
				onBlur={(e) => e.target.placeholder = props.label}
			/>
			{ isInvalid(props) ?  <span>{ props.errorMessage  || 'Please provide a valid value' }</span> : null }
		</div>
	)
}

export default Input
