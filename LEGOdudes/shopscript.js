document.getElementById("cart-button").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("hidden")
})

//======Funksjon for produktopplisting=======//

function fetchProdukts(){
    let productHTML = ""

    products.map(p => productHTML += ` <article class="product-card">
                <img src="website_images-kopi/PROD_${p.imagefile}" alt="${p.title}">
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>KR: ${p.price},-</p>
                <button onClick="addToCart(${p.prodid})">Legg til handlevogn</button>
            </article>`)

    document.getElementById("product-list").innerHTML = productHTML
}

fetchProdukts()

//=========GENERER HANDLEVOGN==========//

function showCart(){
    //Unike produkter//
    let uniqueItems = new Set(cart)
    let uniqueArray = [...uniqueItems]
    //Oversikt over antall per produkt
    let cartItems = []
    uniqueArray.map(item => {
        cartItems.push({prodid: item, quantity: cart.filter(i => i === item).length})
    })
    // console.log(cartItems)

    //gå gjennom cartItems sor å lage HTML til handlekurven og regne totalpris
    let cartHTML = ""
    let totalPrice = 0

    cartItems.map(ci => {
        //relasjon i data - slippe å mellomlagre - flere sider -> enklere å hente opp data
        //hente produktinformasjon
        let product = products.find(i => i.prodid === ci.prodid)
        //skrive ut HTML
        cartHTML += ` <tr>
                        <td class="title">${product.title}</td>
                        <td class="price">${product.price}</td>
                        <td class="quantity">${ci.quantity}</td>
                        <td class="delete"><button onClick="deleteFromCart(${product.prodid})">X</button></td>
                    </tr>`
        //summere totalpris
        totalPrice += Number(product.price) * Number(ci.quantity)
    })

    if(cart.length === 0) {
        cartHTML += "<tr><td>Ingen varer i handlevognen enda<td><tr>"
    }
    document.getElementById("cart-items").innerHTML = cartHTML 
    document.getElementById("total-price").innerHTML = totalPrice
    document.getElementById("cart-quantity").innerHTML = cart.length
}

//=============SLETTE FRA HANDLEVOGN==========//
function deleteFromCart(prodid){
    let deleteIndex = cart.indexOf(prodid)
    if (deleteIndex > - 1) {
        cart.splice(deleteIndex, 1)
    }
    //Oppdatere handlevogn-utskrift
    showCart()
}

//===========LEGG TIL I HANDLEVOGN===========//


function addToCart(prodid){
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    
    //oppdatere handlevisning: 
    showCart()
}
