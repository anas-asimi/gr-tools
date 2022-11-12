import { Outlet, Link } from "react-router-dom";
import React from 'react'

export const Notfound = () => {
    return (
        <main id="notFound">
            <div>page not found.</div>
            <Link to="/">Go back to home</Link>
        </main>
    )
}
