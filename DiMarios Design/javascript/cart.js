let carts = document.querySelectorAll('.add-cart');

let products = [
    //pizzas
    {
        name: "FAIRVIEW PIZZA",
        tag: "fairview-pizza",
        price: 20,
        inCart: 0
    },
    {
        name: "ADELAIDE PIZZA",
        tag: "adelaide-pizza",
        price: 18,
        inCart: 0
    },
    {
        name: "MIDTOWN PIZZA",
        tag: "midtown-pizza",
        price: 20,
        inCart: 0
    },
    {
        name: "PANFORTH PIZZA",
        tag: "panforth-pizza",
        price: 19,
        inCart: 0
    },
    {
        name: "SHAREWAY PIZZA",
        tag: "shareway-pizza",
        price: 18,
        inCart: 0
    },
    {
        name: "YORKVILLE PIZZA",
        tag: "yorkville-pizza",
        price: 19,
        inCart: 0
    },
    {
        name: "OLIVIA PIZZA",
        tag: "olivia-pizza",
        price: 20,
        inCart: 0
    },
    {
        name: "MARGHERITA PIZZA",
        tag: "margherita-pizza",
        price: 18,
        inCart: 0
    },
    
    //salads
    {
        name: "BREAKFAST SALAD",
        tag: "breakfastsalad",
        price: 11,
        inCart: 0
    },
    {
        name: "CAESER SALAD",
        tag: "caesersalad",
        price: 13,
        inCart: 0
    },
    {
        name: "CHICKEN SALAD",
        tag: "chickensalad",
        price: 12,
        inCart: 0
    },
    {
        name: "GREEK SALAD",
        tag: "greeksalad",
        price: 11,
        inCart: 0
    },
    {
        name: "SPICY SALAD",
        tag: "spicysalad",
        price: 12,
        inCart: 0
    },
    {
        name: "SPING SALAD",
        tag: "springsalad",
        price: 11,
        inCart: 0
    },
    {
        name: "SUPERFOOD SALAD",
        tag: "superfoodsalad",
        price: 12,
        inCart: 0
    },
    {
        name: "TOMATO SALAD",
        tag: "tomatosalad",
        price: 11,
        inCart: 0
    },

    //sides
    {
        name: "GARLIC BREAD",
        tag: "garlicbread",
        price: 4,
        inCart: 0
    },
    {
        name: "FRENCH FRIES",
        tag: "frenchfries",
        price: 5,
        inCart: 0
    },
    {
        name: "SWEET P-FRIES",
        tag: "sweetp-fries",
        price: 5,
        inCart: 0
    },
    {
        name: "ONION RINGS",
        tag: "onionrings",
        price: 4,
        inCart: 0
    },
    {
        name: "CHEESE STICKS",
        tag: "cheesesticks",
        price: 5,
        inCart: 0
    },
    {
        name: "CHILLI BITES",
        tag: "chillibites",
        price: 5,
        inCart: 0
    },
    {
        name: "MINI BURGERS",
        tag: "miniburgers",
        price: 7,
        inCart: 0
    },
    {
        name: "CHICKEN WINGS",
        tag: "chickenwings",
        price: 8,
        inCart: 0
    },

    //drinks
    {
        name: "COKE",
        tag: "coke",
        price: 3,
        inCart: 0
    },
    {
        name: "LIME SODA",
        tag: "limesoda",
        price: 3,
        inCart: 0
    },
    {
        name: "APPLE ICE TEA",
        tag: "appleicetea",
        price: 4,
        inCart: 0
    },
    {
        name: "ICE GREEN TEA",
        tag: "icegreentea",
        price: 4,
        inCart: 0
    },
    {
        name: "MAJITO",
        tag: "majito",
        price: 4,
        inCart: 0
    },
    {
        name: "ORANGE JUICE",
        tag: "orangejuice",
        price: 3,
        inCart: 0
    },
    {
        name: "STRAWBERRIE",
        tag: "strawberrie",
        price: 3,
        inCart: 0
    },
    {
        name: "ICE CHAI TEA",
        tag: "icechaitea",
        price: 3,
        inCart: 0
    },
    
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
   
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    


    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    } 
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <div class="product-name">
                    <span>${item.name}</span>
                </div>
            <div class="price">€${item.price}</div>
            <div class="quantity">
            <sapn>${item.inCart}</span>
            </div>
            <div class="total">
                €${item.inCart * item.price}.00
            </div>
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                €${cartCost}.00
                </h4>
            </div>
        `
    }
}

onLoadCartNumbers();
displayCart();