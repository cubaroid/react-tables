import React, { useState } from 'react';
import classes from './Form.module.scss'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import validateControl from '../../utils/validators'

export const Form = props => {
	const initialFormControls = {
		name: {
			value: '',
			type: 'text',
			label: 'Name',
			errorMessage: 'Please provide a valid name',
			valid: false,
			touched: false,
			validation: {
				required: true
			}
		},
		surname: {
			value: '',
			type: 'text',
			label: 'Surname',
			errorMessage: 'Please provide a valid password',
			valid: false,
			touched: false,
			validation: {
				required: true
			}
		},
		age: {
			value: '',
			type: 'number',
			label: 'Age',
			errorMessage: 'Please provide a valid age',
			valid: false,
			touched: false,
			validation: {
				required: true,
				minValue: 12
			}
		},
		city: {
			value: '',
			type: 'text',
			label: 'City',
			errorMessage: 'Please provide a valid city',
			valid: false,
			touched: false,
			validation: {
				required: true
			}
		},
	}

	const [isFormValid, setIsFormValid] = useState(false)
	const [formControls, setFormControls] = useState(initialFormControls)

	const onChangeHandler = (event, key) => {
		const _formControls = { ...formControls },
			control = { ..._formControls[key] }

		control.value = event.target.value
		control.touched = true
		control.valid = validateControl(control.value, control.validation)
		_formControls[key] = control
		let _isFormValid = true

		Object.keys(_formControls).forEach( name => {
			_isFormValid = _formControls[name].valid && _isFormValid
		})

		setIsFormValid(_isFormValid)
		setFormControls(_formControls)
	} 

	const submitForm = (e) => {
		e.preventDefault()

		const newRow = Object.keys(formControls).map( key => {
			return formControls[key].value
		})

		console.log('Submitting form', newRow)
		props.onSubmit(newRow)

		// resetting
		setIsFormValid(false)
		setFormControls({...initialFormControls})
	}

	const renderInputs = () => {
		return Object.keys(formControls).map( ( key, index ) => {
			const control = formControls[key]
			return (
				<Input
					key={key + index}
					value={control.value}
					label={control.label}
					type={control.type}
					errorMessage={control.errorMessage}
					valid={control.valid}
					touched={control.touched}
					shouldValidate={!!control.validation}
					onChange={ event => onChangeHandler(event, key) }
				/>
			)
		})
	}

	return (
		<div className={classes.Form}>
			<form>
				<div className={classes.Form__Group}>
					{ renderInputs() }
				</div>
				<Button
					type="primary"
					block="true"
					disabled={!isFormValid}
					onClick={submitForm}
				>
					ADD
				</Button>
			</form>
		</div>
	)
}
