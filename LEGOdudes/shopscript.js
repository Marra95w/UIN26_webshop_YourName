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

//===========LEGG TIL I HANDLEVOGN===========//

function addToCart(prodid){
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length
}