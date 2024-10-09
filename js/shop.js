// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// Global variables

let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    if (products.some(item => item.id === id)) {
        let found = products.find(item => item.id === id);
        if (cart.some(item => item.id === id)) {
            found.quantity = found.quantity + 1;
        } else {
            found.quantity = 1;
            cart.push(found);
        }
        let cartSymbol = document.body.querySelector("#count_product");
        cartSymbol.textContent = parseInt(cartSymbol.textContent) + 1;
    }
}


// Exercise 2
function cleanCart() {
    cart.length = 0;
    printCart();
    let cartSymbol = document.body.querySelector("#count_product");
    cartSymbol.textContent = '0';
}


// Exercise 3
function calculateTotal() {
    total = 0;
    cart.forEach(element => {
        if (((element.id === 3) || (element.id === 1)) && (element.subtotalWithDiscount != undefined)) {
            total += element.subtotalWithDiscount;
        } else {
            total += (element.price * element.quantity);
        }
    });
    return total;
}


// Exercise 4
function applyPromotionsCart(array) {
    array.forEach(element => {
        if (element.id === 1 || element.id === 3) {
            let item = element.offer;
            if (element.quantity >= item.number) {
                element.subtotalWithDiscount = ((element.price * element.quantity) - ((element.price * element.quantity) * (item.percent / 100)));
            } else {
                element.subtotalWithDiscount = element.price * element.quantity;
            }
        }
    });
}


// Exercise 5
function printCart() {
    applyPromotionsCart(cart);

    const parent = document.body.querySelector("#cart_list");
    let cartTotal = document.body.querySelector("#total_price");
    parent.innerHTML = '';

    cart.forEach(element => {
        const child = document.createElement("tr");
        parent.appendChild(child);
                
        const row = child.appendChild(document.createElement("th"));
        row.setAttribute("scope", "row");
        row.textContent = `${element.name}`.charAt(0).toUpperCase() + `${element.name}`.slice(1);

        child.appendChild(document.createElement("td")).textContent = `$${element.price}`;
        child.appendChild(document.createElement("td")).textContent = `${element.quantity}`;

        if (((element.id === 3) || (element.id === 1)) && (element.subtotalWithDiscount != undefined) ) {
            child.appendChild(document.createElement("td")).textContent = `$${element.subtotalWithDiscount}`;
        } else {
            child.appendChild(document.createElement("td")).textContent = '$' + (`${element.quantity}` * `${element.price}`);
        }

        let buttonPlace = document.createElement("td");
        child.appendChild(buttonPlace);

        let buttonBuy = document.createElement("buttonBuy");
        buttonBuy.className = 'buttonManage';
        buttonBuy.textContent = "+";
        buttonPlace.appendChild(buttonBuy);

        let buttonSell = document.createElement("buttonSell");
        buttonSell.className = 'buttonManage';
        buttonSell.textContent = "-";
        buttonPlace.appendChild(buttonSell);

        buttonSell.addEventListener('click', ()=>{
            removeFromCart(element.id);
            printCart();
        });
        buttonBuy.addEventListener('click', ()=>{
            buy(element.id);
            printCart();
        });
    });
    cartTotal.textContent = calculateTotal();
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    cart.forEach(element => {
        if (element.id === id) {
            element.quantity--
            if (element.quantity === 0) {
                const index = cart.indexOf(element);
                cart.splice(index, 1);
            }
        }
    });

    let cartSymbol = document.body.querySelector("#count_product");
    cartSymbol.textContent = parseInt(cartSymbol.textContent) - 1;
    if (cart.length == 0) { cartSymbol.textContent = '0' };
}


function open_modal() {
    printCart();
}