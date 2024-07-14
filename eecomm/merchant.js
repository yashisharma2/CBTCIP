// merchant.js

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;

    if (name && price && image) {
        const newProduct = {
            name: name,
            price: price,
            image: image
        };

        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product added successfully!');
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productImage').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}
