import React from 'react'
import './debug.css'

const Debug = props => (
	<table>
		<tbody>
			<tr>
				<th colSpan="3">{ props.label }</th>
			</tr>
			<tr>
				<th>X</th>
				<th>{ props.value && props.value.x && props.value.x.toFixed(2) }</th>
			</tr>
			<tr>
				<th>Y</th>
				<th>{ props.value && props.value.y && props.value.y.toFixed(2) }</th>
			</tr>
			<tr>
				<th>Z</th>
				<th>{ props.value && props.value.z && props.value.z.toFixed(2) }</th>
			</tr>
		</tbody>
	</table>
)

export default Debug