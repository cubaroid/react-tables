const intialState = {
	formControls: {
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
	},
	isFormValid:  false,
	isEditMode: false,
	editRowAddress: {
		tableId: null,
		rowIndex: null
	}
}


export default function formReducer(state = intialState, action) {
	switch(action.type) {
		default:
			return state
	}
}
