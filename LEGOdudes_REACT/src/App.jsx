import { products } from './assets/legodudes'
//importere, men må sende videre via Products
import './style/lego.css'
import { useState } from 'react'
//importere style fil
function App() {

  const [isOpen, setIsOpen] = useState(false) 
  //useState funksjon som sjekker en verdi
  //internt komponent
  function Header({setIsOpen}){
    return(
      <header>
        <h1>
          <a href="index.html">
            <img src="website_images-kopi/LD_logo.svg" alt="LEGOdudes"/>
          </a>
        </h1>
          <button id="cart-button" onClick={()=> setIsOpen((prev) => !prev)}>
            {/* prev = true !prev = false */}
            <div id="cart-quantity">0</div>
            <img src="website_images-kopi/legocart.svg" alt="handlevogn"/>
          </button>
        </header>
    )
  }

  function Nav(){
    return(
      <nav>
            <a href="#">City</a>
            <a href="#">Ninjago</a>
            <a href="#">Castes & Knights</a>
            <a href="#">Marine & Pirates</a>
            <a href="#">Movie & Characters</a>
        </nav>
    )
  }

  function CategoryTitle(){
    return(<h2>Ninjago</h2>)
  }
  function Products({products}){
    return(
    <div id="product-list">
      {products.map(p => <ProductCard key={p.prodid} p={p} />)}
      
    </div>)
  }
  //ta imot p i productCard
  function ProductCard({p}){
    const handleClick = () =>{
      console.log("legg i handlekurv")
    }
    return(
      <article className="product-card">
        <img src={`website_images-kopi/PROD_${p.imagefile}`} alt={p.title}/>
        <a href="#">{p.category}</a>
        <h3>{p.title}</h3>
        <p>KR: {p.price},-</p>
        <button onClick={handleClick}>Legg til handlevogn</button>
      </article>
    )
  }

    function Cart({isOpen}){
    return(
       <section id="cart" className={isOpen ? "" : "hidden"}> {/* if test = sjekker useState funksjonen*/}
            <table id="cart-items">
              <tbody>
                <tr>
                  <td>Ingen varer i handlevognen enda</td>
                 </tr>
              </tbody>
              
            </table>
            <p>Total Pris: <span id="total-price">0 </span>NOK</p>
        </section>
    )
  }

  function CartItem(){
    return(
      <tr>
        <td className="title">${product.title}</td>
        <td className="price">${product.price}</td>
        <td className="quantity">${ci.quantity}</td>
        <td className="delete"><button onClick="deleteFromCart(${product.prodid})">X</button></td>
      </tr>
    )
  }

  //jobbe internt
  return (
    <div id='container'>
    <Header setIsOpen={setIsOpen}/>
    <Nav />
    <main>
      <CategoryTitle />
      <Products products={products}/>
    </main>
    <Cart isOpen={isOpen}/>
    </div>
  )
}

export default App
