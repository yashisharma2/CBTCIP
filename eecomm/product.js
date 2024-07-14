// products.js

function loadProducts() {
    const productList = document.getElementById('productList');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    productList.innerHTML = '';


    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="openOrderForm()">Buy Now</button>
        `;
        productList.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);
