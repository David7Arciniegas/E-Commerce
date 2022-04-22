
//Carrito


let cartIcon = document.querySelector("#cart-icon");
let cart1 = document.querySelector(".cart");
let closeCart = document.querySelector(".btn-buy");

// Abrir carrito
cartIcon.onclick = () => {
    cart1.classList.add("active");
};

//Cerrar Carrito

closeCart.onclick = () => {
    cart1.classList.remove("active");
};






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
    console.log('qty:', cart.length)
    console.log(getCartTotal())
    return cart
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

itemList.forEach( elt => elt.children[3].addEventListener('click', () =>{
    addItem(elt.children[0].innerText ,Number(elt.children[1].innerText.split("$")[1]))
    showItems()
}))

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



