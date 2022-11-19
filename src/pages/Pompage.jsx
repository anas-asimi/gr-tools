import { useState } from "react";

export const Pompage = () => {

  const [parameters, setParameters] = useState({
    debit: 14,
    hmt: 80,
    rendementPompe: 65,
    rendementMotor: 90,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.valueAsNumber;
    setParameters({
      ...parameters,
      [name]: value
    })
  }

  function calculFunction(parameters) {
    if (parameters.debit && parameters.hmt && parameters.rendementPompe && parameters.rendementMotor) {

      let acceliration = 9.81 // m/s
      let eau_density = 1000 // Kg/m3
      let debit = parameters.debit / 3600 // m3/s
      let hmt = parameters.hmt // m
      let rendementPompe = parameters.rendementPompe / 100 // %
      let rendementMotor = parameters.rendementMotor / 100 // %
      let Kw_to_Hp = 1.36 //number
      let puissance = (acceliration * eau_density * hmt * debit * Kw_to_Hp) / (1000 * rendementPompe * rendementMotor) // puissance en Hp
      return puissance.toFixed(2)
    }
    else return 'error'
  }

  return (
    <main id='pompage'>
      <div className="group">
        <input type="number" value={parameters.debit} onChange={handleChange} name="debit" id="debit" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Débit (m<sup>3</sup>/h)</label>
      </div>
      <div className="group">
        <input type="number" value={parameters.hmt} onChange={handleChange} name="hmt" id="hmt" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Hmt (m)</label>
      </div>
      <div className="group">
        <input type="number" value={parameters.rendementPompe} onChange={handleChange} name="rendementPompe" id="rendementPompe" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Rendement de pompe (%)</label>
      </div>
      <div className="group">
        <input type="number" value={parameters.rendementMotor} onChange={handleChange} name="rendementMotor" id="rendementMotor" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Rendement de motor (%)</label>
      </div>
      <div className="result">
        {(calculFunction(parameters) === 'error') ? 'put valide numbers 😤' : `Puissance : ${calculFunction(parameters)} Cv`}
      </div>
    </main>
  )
}
