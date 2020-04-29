import React from 'react'
import classes from './Table.module.scss'
import Button from '../UI/Button/Button';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Table = ({ headers, data, copyTable, tableId, rowRemove, rowEdit }) => {
	const renderHeaders = () => {
		return (
			<tr 
				className={classes['table__header--row']}
			>
				{
					headers.map( (hdr, idx) => {
						return (
							<th 
								className={classes['table__header--cell']}
								key={'header__' + idx}
							>
								{ hdr }
							</th>
						)
					})
				}
			</tr>
		)
	}

	const renderTableRows = () => {
		return data.map( ({id, items} , idx) => {
			return (
				<CSSTransition
					key={id}
					timeout={500}
					classNames="fade"
				>
					<tr 
						className={classes.table__row}
					>
						{ 
							items.map( ( item, index ) => {
								return <td key={`cell_${idx}_${index}`}className={classes.table__cell}>{ item }</td>
							}) 
						}

						<td key={`cell_${idx}_actions`} className={[classes.table__cell, classes['table__cell--actions']].join(' ')}>
							<span 
								className={classes['table__cell--edit']}
								onClick={() => rowEdit(tableId, idx)}
							>
								Edit
							</span>
							<span 
								className={classes['table__cell--remove']}
								onClick={() => rowRemove(tableId, idx)}
							>
							Remove</span>
						</td>
					</tr>
				</CSSTransition>
			)
		})
	}
	
	return (
		<div className={classes.table__wrapper}>
			<div className={classes.table__actions}>
				<Button
					type="primary"
					onClick={() => copyTable(tableId)}
				>
					Copy Table
				</Button>
			</div>
			<table className={classes.table}>
				<thead className={classes.table__header}>
					{ renderHeaders() }
				</thead>

				<TransitionGroup 
					component={'tbody'}
					className={classes.table__body}
				>
					{ renderTableRows() }
				</TransitionGroup>
			</table>
		</div>
	)
}
