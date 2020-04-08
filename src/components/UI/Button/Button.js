import React from 'react';
import cls from './Button.module.scss'

const Button = props =>  {
	const clist = [
		cls.Button,
		cls[props.type]
	]

	if ( props.block ) {
		clist.push(cls.Block)
	}

	return (
		<button
			type="button"
			className={clist.join(' ')}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{ props.children }
		</button>
	   )
}

export default Button
