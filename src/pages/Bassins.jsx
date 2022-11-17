import { useState } from "react";
import {calculFunction , volume_totale , volume_utile , surface_geomembrane , cloture} from './BassinFunctions'

export const Bassins = () => {
  const [parameters, setParameters] = useState({
    longueur: 20,
    largeur: 20,
    profondeur: 4,
    talus: 1,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setParameters({
      ...parameters,
      [name]: value
    })
  }


  return (
    <main id='bassins'>
      <div className="input">
        <div className="grid-container">
          <div className="group">
            <input type="number" value={parameters.longueur} onChange={handleChange} name="longueur" id="longueur" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Longueur</label>
          </div>
          <div className="group">
            <input type="number" value={parameters.largeur} onChange={handleChange} name="largeur" id="largeur" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Largeur</label>
          </div>
          <div className="group">
            <input type="number" value={parameters.profondeur} onChange={handleChange} name="profondeur" id="profondeur" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Profondeur</label>
          </div>
          <div className="group">
            <input type="number" value={parameters.talus} onChange={handleChange} name="talus" id="talus" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Talus</label>
          </div>
        </div>
      </div>
      <div className="output">
        <div className="container">
          <h1>Result :</h1>
          <p>Volume totale =
            <span id="volume-totale">
              {' ' + parseInt(calculFunction('volumeTotale' , parameters))}
            </span> m3</p>
          <p>Volume utile =
            <span id="volume-utile">
              {' ' + parseInt(calculFunction("volumeUtile" , parameters))}
            </span> m3</p>
          <p>Surface de geomembrane =
            <span id="geomembrane">
              {' ' + parseInt(calculFunction('geomembrane' , parameters))}
            </span> m2</p>
          <p>Cloture =
            <span id="cloture">
              {' ' + parseInt(calculFunction('cloture' , parameters))}
            </span> ml</p>
        </div>
      </div>
    </main>
  )
}
