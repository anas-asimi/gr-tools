import { Link } from "react-router-dom";
import React from 'react'

export const Home = () => {
  return (
    <main id='home'>
      <h2>Hello visitor</h2>
      <p>If you are HRI. You are in the right place</p>
      <div>
        <p>Go and serve yourself:</p>
        <Link to="/bassins" >calculs de stockage d'eau</Link>
        <Link to="/pompage" >calculs de pompage</Link>
        <Link to="/about" >About me</Link>
      </div>
    </main>
  )
}
