import transformation from 'transform-coordinates'
import { useState } from "react";

const zone_indexs = ['EPSG:26191', 'EPSG:26192', 'EPSG:26194', 'EPSG:26195']
const WGS_index = 'EPSG:4326'

export const DriveME = () => {
	const [parameters, setParameters] = useState({
		x: '',
		y: '',
		zone: 1,
	});

	function handleChange(event) {
		const name = event.target.name;
		const value = parseInt(event.target.value);
		setParameters({
			...parameters,
			[name]: value
		})
	}
	function start() {
		let transform = transformation(zone_indexs[parameters.zone - 1], WGS_index)
		let {x,y} = transform.forward({x : parameters.x , y : parameters.y})
		if (isNaN(x) && isNaN(y) ) {
			const URL = `https://www.google.com/maps/search/${y},+${x}`
			window.open(URL, '_blank');	
		}
	}
	return (
		<main id='drive-me'>
			<div className="group">
				<input type="number" name="x" value={parameters.x} onChange={handleChange} required />
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>X</label>
			</div>
			<div className="group">
				<input type="number" name="y" value={parameters.y} onChange={handleChange} required />
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>Y</label>
			</div>
			<div className="group">
				<select name="zone" value={parameters.zone} onChange={handleChange} required>
					<option value="1">Lambert Zone I</option>
					<option value="2">Lambert Zone II</option>
					<option value="3">Lambert Zone III</option>
					<option value="4">Lambert Zone IV</option>
				</select>
			</div>
			<div className="group">
				<button onClick={start}>Start</button>
			</div>
		</main>
	)
}
