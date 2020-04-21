import store from '../store'
import { TABLE_ADD_ROW, TABLE_REMOVE_ROW, TABLE_UPDATE_ROW, TABLE_COPY_TABLE } from './action.types';
import { getUniqueId } from '../../utils/helpers';

export const addRow = (rowData) => {
	const tableState = store.getState().table

	// grab last table
	const currentTableIndex = tableState.length - 1

	return {
		type: TABLE_ADD_ROW,
		payload: {
			rowData,
			tableIndex: currentTableIndex
		}
	}
}


export const removeRow = (payload) => {
	return {
		type: TABLE_REMOVE_ROW,
		payload
	}
}


export const copyTable = (payload) => {
	return {
		type: TABLE_COPY_TABLE,
		payload
	}
}

export const updateRow = (payload) => {
	return {
		type: TABLE_UPDATE_ROW,
		payload
	}
}


