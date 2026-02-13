import { Children } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <> 
        <nav className="main-nav">
            <Link to="/">Hjem</Link>
            <Link to="categories">Kategorier</Link>
            <Link to="about">Om oss</Link>
        </nav>
        {children}
        <footer>
            <p>2026 utvikling av interaktive nettsteder - react router</p>
        </footer>
        </>
    )
}