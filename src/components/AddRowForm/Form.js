import React from 'react';
import classes from './Form.module.scss'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import validateControl from '../../utils/validators'
import {connect} from 'react-redux';

const Form = props => {
	const onChangeHandler = (event, key) => {
		//const _formControls = { ...formControls },
			//control = { ..._formControls[key] }

		//control.value = event.target.value
		//control.touched = true
		//control.valid = validateControl(control.value, control.validation)
		//_formControls[key] = control
		//let _isFormValid = true

		//Object.keys(_formControls).forEach( name => {
			//_isFormValid = _formControls[name].valid && _isFormValid
		//})

		//setIsFormValid(_isFormValid)
		//setFormControls(_formControls)
	} 

	const submitForm = (e) => {
		//e.preventDefault()

		//if ( isEditMode ) {
			//setIsEditMode(false)
			//setEditRowAddress(editRowAddressInitialState)
		//} else {
			//const newRow = Object.keys(formControls).map( key => {
				//return formControls[key].value
			//})

			//console.log('Submitting form', newRow)
			//props.onSubmit(newRow)
		//}
		//// resetting
		//setIsFormValid(false)
		//setFormControls({...initialFormControls})
	}

	const renderInputs = () => {
		return Object.keys(props.formControls).map( ( key, index ) => {
			const control = props.formControls[key]
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
					disabled={!props.isFormValid}
					onClick={submitForm}
				>
					{ props.isEditMode ? 'EDIT' : 'ADD' }
				</Button>
			</form>
		</div>
	)
}


function mapStateToProps(state) {
	return {
		formControls: state.form.formControls,
		isFormValid: state.form.isFormValid,
		isEditMode: state.form.isEditMode,
		editRowAddress: state.form.editRowAddress
	}
}

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
