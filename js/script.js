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
function addItem(id, price) {
    for (let i = 0; i < cart.length; i+=1){
        if(cart[i].id === id){
            cart[i].qty +=1
            return
        }
    }
    cart.push({'id':id, 'price':price, 'qty': 1})
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
    let subelement = document.createElement("h2")
    subelement.innerHTML =String("\n " + element.id + " " + element.price + " " + element.qty)
    cartContent.append(subelement)
    })
    let subelement = document.createElement("h1")
    cartContent.append(document.createElement("br"))
    subelement.innerHTML = String("\n\nTOTAL " + getCartTotal() + ",  " + getCartQty() + " Elementos")
    cartContent.append(subelement)
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
itemList.forEach( elt => elt.children[3].addEventListener('click', () =>{
    addItem(elt.children[0].innerText ,Number(elt.children[1].innerText.split("$")[1]))
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



