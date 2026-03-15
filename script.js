'use strict';

// Shopping Cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    console.log('Cart:', cart);
}

// Search functionality
function searchProducts(keyword) {
    const results = products.filter(product => product.name.includes(keyword));
    displayResults(results);
}

// Filter functionality
function filterProducts(category) {
    const results = products.filter(product => product.category === category);
    displayResults(results);
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Display product details
function displayProductDetails(product) {
    console.log('Product Details:', product);
}

// Example product data
const products = [
    { id: 1, name: 'Product 1', category: 'Category 1' },
    { id: 2, name: 'Product 2', category: 'Category 2' }
];

// To call on load or based on events
updateCartDisplay();
