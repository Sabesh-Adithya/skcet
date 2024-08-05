// Create an array to hold the cart items
const cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    // Add item to the cart array
    cart.push({ name: itemName, price: itemPrice });
    
    // Update the cart UI
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    // Get references to the cart items and total elements
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    // Clear current cart items
    cartItemsElement.innerHTML = '';

    // Calculate the total price
    let total = 0;

    // Add each cart item to the cart UI
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} = $${item.price}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    // Update the total price
    totalElement.textContent = total.toFixed(2);
}
