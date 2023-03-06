/*
FROM 
Lambert Zone I		= EPSG:26191
Lambert Zone II		= EPSG:26192 <==
Lambert Zone III	= EPSG:26194
Lambert Zone IV		= EPSG:26195

TO
WORLD WGS84 		=EPSG:4326

EXMP
import transformation from 'transform-coordinates'
const transform = transformation('EPSG:26192', 'EPSG:4326')  
console.log(transform.forward({x, y}))
console.log(transform.inverse({x, y}))

*/