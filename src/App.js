import React, { useState } from 'react';
import classes from './App.module.scss'
import { Form } from './components/AddRowForm/Form'
import { Table } from './components/Table/Table';
import {connect} from 'react-redux';
import { addRow, removeRow, copyTable } from './store/actions/table.actions';

function App(props) {
	const onSubmitHandler = (payload) => {
		props.addRow(payload)
	}

	const handleTableCopy = id => {
		props.copyTable(id)
	}

	const handleRowRemove = ( tableId, rowId) => {
		props.removeRow({tableId, rowId})
	}

	const handleRowEdit = () => {

	}

	return (
		<div className={classes.App}>
			<Form
				onSubmit={onSubmitHandler}
		   	/>
			{
				props.tableState.map( ( table, idx ) => {
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

function mapStateToProps(state) {
	return {
		tableState: state.table
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addRow: payload => dispatch(addRow(payload)),
		removeRow: payload => dispatch(removeRow(payload)),
		copyTable: payload => dispatch(copyTable(payload))

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
