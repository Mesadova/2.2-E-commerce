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

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    if (products.some(item => item.id === id)) {
        let found = products.find(item => item.id === id);
        if (cart.some(item => item.id === id)) {
            found.quantity += 1;
        } else {
            found.quantity = 1;
            cart.push(found);
        }
        let cartSymbol = document.body.querySelector("#count_product");
        cartSymbol.textContent = parseInt(cartSymbol.textContent) + 1;
    } else {
        alert('Error: item does not exist.');
    }
};


// Exercise 2
function cleanCart() {
    cart.length = 0;
    printCart();
    let cartSymbol = document.body.querySelector("#count_product");
    cartSymbol.textContent = '0';
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
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
    // Apply promotions to each item in the array "cart"
    array.forEach(element => {
        if (element.id === 1) {
            let item = element.offer;
            if (element.quantity >= item.number) {
                element.subtotalWithDiscount = ((element.price * element.quantity) - ((element.price * element.quantity) * (item.percent / 100)));
            }
        } else if (element.id === 3) {
            let item = element.offer;
            if (element.quantity >= item.number) {
                element.subtotalWithDiscount = ((element.price * element.quantity) - ((element.price * element.quantity) * (item.percent / 100)));
            }
        } else {
        }
    });
}


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart(cart);

    let parent = document.body.querySelector("#cart_list");
    let cartTotal = document.body.querySelector("#total_price");
    parent.innerHTML = '';

    cart.forEach(element => {
        let x = document.createElement("tr");
        parent.appendChild(x);
                
        const row = x.appendChild(document.createElement("th"));
        row.setAttribute("scope", "row");
        row.textContent = `${element.name}`.charAt(0).toUpperCase() + `${element.name}`.slice(1);

        x.appendChild(document.createElement("td")).textContent = `$${element.price}`;
        x.appendChild(document.createElement("td")).textContent = `${element.quantity}`;

        if (((element.id === 3) || (element.id === 1)) && (element.subtotalWithDiscount != undefined)) {
            x.appendChild(document.createElement("td")).textContent = `$${element.subtotalWithDiscount}`;
        } else {
            x.appendChild(document.createElement("td")).textContent = '$' + (`${element.quantity}` * `${element.price}`);
        }        
    });

    cartTotal.textContent = calculateTotal();
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}