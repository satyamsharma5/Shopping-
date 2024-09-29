let cart = [];
let total = 0;

function addToCart(productName, price) {
    // Add item to the cart
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    cartItems.innerHTML = '';
    total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalDisplay.textContent = total;
}

// Show payment options section
function showPaymentOptions() {
    document.getElementById('payment-section').style.display = 'block';
}

// Hide payment options section
function hidePaymentOptions() {
    document.getElementById('payment-section').style.display = 'none';
}

// Handle payment submission
function submitPayment() {
    const paymentForm = document.forms['payment-form'];
    const paymentMethod = paymentForm.elements['payment'].value;

    if (!paymentMethod) {
        alert('Please select a payment method.');
    } else {
        alert(`Payment Successful using ${paymentMethod}. Total: $${total}`);
        // Clear the cart after payment
        cart = [];
        updateCart();
        hidePaymentOptions();
    }
}
