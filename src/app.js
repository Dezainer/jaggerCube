import React from 'react'
import { render } from 'react-dom'
import './app.css'

import Quaternion from 'quaternion'

import Cube from 'cube/cube'
import Debug from 'debug/debug'

class App extends React.Component {

	state = {
		acceleration: {},
		velocity: {},
		position: {},
		orientation: {}
	}

	componentDidMount() {
		this.ws = new WebSocket('ws://192.168.43.187:3000?type=observer')
		this.ws.onmessage = msg => this.handleData(JSON.parse(msg.data))
	}

	handleData(data) {
		let point = data[Object.keys(data)[0]]
		if(!point) return

		this.setState({ 
			orientation: new Quaternion(this.formatRotation(point.orientation)).conjugate().toMatrix4(),
			position: this.formatPosition(point.position),
			acceleration: point.acceleration,
			velocity: point.velocity
		})
	}

	formatRotation(rotation) {
		return {
			x: rotation.y * -1,
			y: rotation.z,
			z: rotation.x * -1,
			w: rotation.w
		}
	}

	formatPosition(position) {
		return {	
			x: position.x * 4571,
			z: position.z * -4571,
			y: position.y * -4571
		}
	}

	render() {
		return (
			<div className="container">
				<div className="debug">
					<Debug
						label="Acceleration"
						value={ this.state.acceleration }
					/>
					<Debug
						label="Velocity"
						value={ this.state.velocity }
					/>
					<Debug
						label="Position"
						value={ this.state.position }
					/>
				</div>
				<Cube
					position={ this.state.position }
					orientation={ this.state.orientation }
				/>
			</div>
		)
	}
}

render(<App/>, document.getElementById('main'))