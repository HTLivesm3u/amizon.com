const products = [
    {
        id: 1,
        name: 'papa ji',
        price: 2999.99,
        image: 'https://t3.ftcdn.net/jpg/05/69/30/42/360_F_569304262_RGVohUth9wyR5Msa3CoR4XFvMYE8VG1k.jpg'
    },
    {
        id: 2,
        name: 'Ritesh Sir',
        price:0.01,
        image: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg'
    },
    {
        id: 3,
        name: 'mummy ji',
        price: 1999.99,
        image: 'https://i.pinimg.com/564x/8e/97/e7/8e97e73d98e073e723eb0a49a25a6aa9.jpg'
    },
    {
        id: 4,
        name: 'Hitman Sir',
        price: 9999.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s'
    }
];

const productList = document.querySelector('.product-list');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
});

function addToCart(productId) {
    alert('Product ' + productId + ' added to cart!');
}
