import { Link, Outlet } from "react-router-dom";

export default function CategoryLayout() {
    return (
        <>
        <nav>
            <Link to="sko">Sko</Link>
            <Link to="bukse">Bukse</Link>
            <Link to="topp">Topp</Link>
            <Link to="kjole">Kjole</Link>
            <Link to="skjorter">Skjorter</Link>
        </nav>
        <Outlet />
        </>
    )
}