const products = [
    {
        id: 1,
        title: 'Running Shoes',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHx8fDE2MzI3OTQ4Nzc&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        id: 2,
        title: 'Casual Sneakers',
        price: 199.99,
        image: 'https://media.istockphoto.com/id/1301791544/photo/concept-healthy-lifestyle-outfit-sport-and-diet-top-view-text-space-athletes-set-flat-lay.webp?b=1&s=170667a&w=0&k=20&c=OTqKGfPgdh1m0pBg7_5KZ1y8RHq48CNqji26nNMH5EU='
    },
    {
        id: 3,
        title: 'Formal Shoes',
        price: 499.99,
        image: 'https://media.istockphoto.com/id/939840292/photo/white-tennis-shoe-red-background.webp?b=1&s=170667a&w=0&k=20&c=MmkMmfo2lcM3XCyUE5qTsn8ybpQasCLBjybqMT5qOsg='
    },
    {
        id: 4,
        title: 'Sports Shoes',
        price: 349.99,
        image: 'https://media.istockphoto.com/id/862528746/photo/mens-sports-shoes.webp?b=1&s=170667a&w=0&k=20&c=gniQ6upxKC4pDpOYZqKDF92iwu8vC-KzsHEZBp3h-TU='
    },
    {
        id: 5,
        title: 'Hiking Boots',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 6,
        title: 'Sandals',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 1,
        title: 'Running Shoes',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHx8fDE2MzI3OTQ4Nzc&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        id: 2,
        title: 'Casual Sneakers',
        price: 199.99,
        image: 'https://media.istockphoto.com/id/1301791544/photo/concept-healthy-lifestyle-outfit-sport-and-diet-top-view-text-space-athletes-set-flat-lay.webp?b=1&s=170667a&w=0&k=20&c=OTqKGfPgdh1m0pBg7_5KZ1y8RHq48CNqji26nNMH5EU='
    },
    {
        id: 3,
        title: 'Formal Shoes',
        price: 499.99,
        image: 'https://media.istockphoto.com/id/939840292/photo/white-tennis-shoe-red-background.webp?b=1&s=170667a&w=0&k=20&c=MmkMmfo2lcM3XCyUE5qTsn8ybpQasCLBjybqMT5qOsg='
    },
    {
        id: 4,
        title: 'Sports Shoes',
        price: 349.99,
        image: 'https://media.istockphoto.com/id/862528746/photo/mens-sports-shoes.webp?b=1&s=170667a&w=0&k=20&c=gniQ6upxKC4pDpOYZqKDF92iwu8vC-KzsHEZBp3h-TU='
    },
    {
        id: 5,
        title: 'Hiking Boots',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 6,
        title: 'Sandals',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D'
    },
];

let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.product-list');
    const cartCountElement = document.getElementById('cart-count');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-details">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <a href="#" class="add-to-cart" data-id="${product.id}">Add to Cart</a>
            </div>
        `;

        productContainer.appendChild(productElement);
    });

    productContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            e.preventDefault();
            cartCount++;
            cartCountElement.textContent = cartCount;
        }
    });
});
