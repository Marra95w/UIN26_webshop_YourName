import { Link } from "react-router-dom"
export default function Layout({children}) {
    return(
        <>
        <nav>
            <Link to="/">Hjem</Link>
            <Link to="/characters">Karakterer</Link>
            
        </nav>
        {children}
        </>
    
    )
}