import { Link } from 'react-router-dom'
export default function Categories() {
    return (
        <main>
            <h1>Kategorier</h1>
            <Link to="/categories/category">Produkt Kategori</Link>
        </main>
    )
}