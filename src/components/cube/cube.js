import React from 'react'
import './cube.css'

const Cube = props => (
	<div className="cube" style={{ 
		transform: `translate3d(${ 
			props.position.x 
		}px, ${ 
			props.position.y 
		}px, ${ 
			props.position.z 
		}px) matrix3d(${ 
			props.orientation 
		})` 
	}}>
		<div className="face">
			<h1>FRONT</h1>
		</div>
		<div className="face">
			<h1>TOP</h1>
		</div>
		<div className="face">
			<h1>LEFT</h1>
		</div>
		<div className="face">
			<h1>BOTTOM</h1>
		</div>
		<div className="face">
			<h1>RIGHT</h1>
		</div>
		<div className="face">
			<h1>BACK</h1>
		</div>
	</div>
)

export default Cube