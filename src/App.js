import React, { useState } from 'react';
import classes from './App.module.scss'
import { Form } from './components/AddRowForm/Form'
import { Table } from './components/Table/Table';

function App() {
	const getUniqueId = () => parseInt(Number(Math.random() * 10000),10)

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

	// adding ids
	initialTableState[0].data = initialTableState[0].data.map( i => ({id: getUniqueId(), items: i}) )
	const [tableState, setTableState] = useState(initialTableState)

	const onSubmitHandler = (payload) => {
		// grab last table
		const currentTableIndex = tableState.length - 1

		let table = {...tableState[currentTableIndex]}
		let data = table.data.concat()
		let newTableState = tableState.concat()

		data.push({
			id: getUniqueId(),
			items: payload
		})

		newTableState[currentTableIndex].data = data
		setTableState(newTableState)
	}

	const handleTableCopy = id => {
		const table = {...tableState.find( table => table.id === id )}
		table.id = getUniqueId()
		setTableState(tableState.concat(table))
	}

	const handleRowRemove = ( tableId, rowId) => {
		console.log('removing row', tableId, rowId)
		let newTableState = tableState.concat()

		newTableState.forEach( table => {
			if ( table.id === tableId ) {
				console.log('removing data from table' ,table.id)
				let data = table.data.concat();
				data.splice(rowId, 1)
				table.data = data
			}
		})

		console.log('newtable', newTableState)
		setTableState(newTableState)
	}

	const handleRowEdit = () => {

	}

	return (
		<div className={classes.App}>
			<Form
				onSubmit={onSubmitHandler}
		   	/>
			{
				tableState.map( ( table, idx ) => {
					return (
						<Table 
							headers={table.headers}
							data={table.data}
							key={table.id}
							tableId={table.id}
							copyTable={handleTableCopy}
							rowEdit={handleRowEdit}
							rowRemove={handleRowRemove}
						/>
				   )
				})

			}
		</div>
	);
}

export default App;
