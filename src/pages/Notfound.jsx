import { Outlet, Link } from "react-router-dom";
import React from 'react'

export const Notfound = () => {
    return (
        <main id="notFound">
            <img src="./assets/error404.png" className="error-image"/>
            <p>Page not found.</p>
            <Link to="/">Go back to home</Link>
        </main>
    )
}
