import { getUniqueId } from '../../utils/helpers'
import { TABLE_ADD_ROW, TABLE_REMOVE_ROW, TABLE_COPY_TABLE } from '../actions/action.types';

const initialTableState = [
	{
		headers: [
			'Name',
			'Surname',
			'Age',
			'City',
			'' // actions
		],
		data: [
			[
				"Angelina",
				"Davenport",
				27,
				"Cloverdale"
			],
			[
				"Barr",
				"Spears",
				21,
				"Fidelis"
			],
			[
				"Beck",
				"Sosa",
				40,
				"Biehle"
			],
			[
				"Schwartz",
				"Berry",
				40,
				"Bonanza"
			],
			[
				"Moran",
				"Anthony",
				33,
				"Abiquiu"
			],
			[
				"Wall",
				"Head",
				38,
				"Wintersburg"
			],
			[
				"Lelia",
				"Mcbride",
				26,
				"Moraida"
			],
			[
				"Dorsey",
				"Robles",
				40,
				"Longoria"
			],
			[
				"Amy",
				"Oconnor",
				35,
				"Eureka"
			],
			[
				"Clark",
				"Garza",
				29,
				"Century"
			]
		],
		id: getUniqueId()
	}
]

initialTableState[0].data = initialTableState[0].data.map( i => ({id: getUniqueId(), items: i}) )

export default function tableReducer (state = initialTableState, action) {
	switch(action.type) {
		case TABLE_ADD_ROW:
			let table = {...state[action.payload.tableIndex]}
			let data = table.data.concat()
			let newState = state.concat()

			data.push({
				id: getUniqueId(),
				items: action.payload.rowData
			})

			newState[action.payload.tableIndex].data = data

			return [
				...newState
			]
		case TABLE_REMOVE_ROW:
			let newTableState = state.concat()
			newTableState.forEach( table => {
				if ( table.id === action.payload.tableId ) {
					let data = table.data.concat();
					data.splice(action.payload.rowId, 1)
					table.data = data
				}
			})

			return [
				...newTableState
			]
		case TABLE_COPY_TABLE:
			const newTable = {...state.find( table => table.id === action.payload )}
			newTable.id = getUniqueId()
			return [
				...state.concat(newTable)
			]
		default:
			return state
	}
}
