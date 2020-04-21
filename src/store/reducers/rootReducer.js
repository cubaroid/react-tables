import { combineReducers } from 'redux'
import formReducer from './form.reducer.js'
import tableReducer from './table.reducer.js'

export default combineReducers({
	form: formReducer,
	table: tableReducer
})
