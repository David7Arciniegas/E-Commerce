//Cart buttons selectors
let openCart = document.querySelector("#cart-icon");
let cart1 = document.querySelector(".cart");
let closeCart = document.querySelector(".actionclose")
let cartBox = document.querySelector(".cart");
let cartItemsShown = document.querySelector(".item-box")
let cartContent = document.querySelector(".item-box")


// Cart and functions

let cart = []

// Adds item to the cart
function addItem(id, price, img) {
    for (let i = 0; i < cart.length; i+=1){
        if(cart[i].id === id){
            cart[i].qty +=1
            return
        }
    }
    cart.push({'id':id, 'price':price, 'qty': 1, 'img':img})
}

// Remove item from cart
function removeItem(id, qty = 0) {
    for (let i = 0; i < cart.length; i+=1){
        if(cart[i].id === id){
            if (qty > 0){
                cart[i].qty -=1
            } 
            if (cart[i].qty < 1 || qty === 0){
                cart.splice(i, 1)
            }
            return cart
        }
    }
}

// get all the items in the cart
function showItems() {
    cart.forEach(function appendHTML(element) { 
    // imagen
    let productImage = document.createElement("img")
    productImage.src = element.img
    productImage.style.width = "15rem"
    
    // descripcion
    let productDescription = document.createElement("h2")
    // botones para remover y agregar
    let removeButton = document.createElement("button")
    removeButton.innerHTML = 'Eliminar elemento'
    removeButton.addEventListener('click', () =>{
        removeItem(element.id,1)
        cartItemsShown.innerHTML = "";
        showItems()
    })
    let addspace = document.createElement("br")
    let addButton = document.createElement("button")
    addButton.innerHTML = 'Añadir elemento'
    addButton.addEventListener('click', () =>{
        addItem(element.id ,
        element.price,
        element.img)
        cartItemsShown.innerHTML = ""
        showItems()
    })
    // descripcion
    productDescription.innerHTML = String("\n " + element.id + "   $ " + element.price + "   Unidades " + element.qty)
    // añadir elemento
    cartContent.append(productImage)
    cartContent.append(productDescription)
    cartContent.append(addButton)
    cartContent.append(addspace)
    cartContent.append(removeButton)
    })
    let totalvalue = document.createElement("h1")
    cartContent.append(document.createElement("br"))
    totalvalue.innerHTML = String("\n\nTOTAL " + getCartTotal() + ",  " + getCartQty() + " Elementos")
    cartContent.append(totalvalue)

}

// get Total 
function getCartTotal(){
    return Number(cart.reduce((partialSum, a) => partialSum + a.price * a.qty, 0).toFixed(2))
}

// get total Qty
function getCartQty(){
    return cart.reduce((partialSum, a) => partialSum + a.qty, 0)
}




// map buttons query selector

// list of html elements that are products
let itemList = Array.from(document.querySelectorAll('.product'))

// event listeners for buttons
itemList.forEach( elt => elt.children[4].addEventListener('click', () =>{
    addItem(elt.children[1].innerText ,
    Number(elt.children[2].innerText.split("$")[1]),
    elt.children[0].src.slice(elt.children[0].src.lastIndexOf("images"), elt.children[0].src.length))
}))

// event listeners for cart buttons
closeCart.addEventListener('click', () =>{
    cartBox.style.visibility = "hidden"
    cartItemsShown.innerHTML = "";
})

openCart.addEventListener('click', () =>{
    showItems()
    cartBox.style.visibility = "visible"
    closeCart.onclick = () =>{
        cartBox.style.visibility = "hidden"
    }
})


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');

}

window.onscroll = () =>{
 menu.classList.remove('fa-times');
 navbar.classList.remove('active');

}


let slides = document.querySelectorAll('slide-container');
let index = 0;

function next(){

 slides[index].classList.remove('active');
 index = (index + 1) % slides.length;
 slides[index].classList.add('active');
 
}



