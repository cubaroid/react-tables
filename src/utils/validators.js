export default function validateControl(value, validation) {
	if ( !validation ) {
		return true
	}

	let isValid = true

	if ( validation.required ) {
		isValid = value.trim() !== '' && isValid
	}

	if ( validation.minValue ) {
		let _value = parseInt(value, 10)
		isValid = _value >= parseInt(validation.minValue, 10) && isValid
	}

	return isValid
}
