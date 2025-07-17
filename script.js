document.addEventListener('DOMContentLoaded', () => {
    // Load products from Fake Store API
    async function loadProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=4');
            const products = await response.json();

            // Full product list for products.html
            const productContainer = document.getElementById('product-container');
            if (productContainer) {
                productContainer.innerHTML = products.map(product => `
                    <div class="product-card">
                        <div class="image-wrapper">
                            <img src="${product.image}" alt="Imagen de ${product.title}">
                        </div>
                        <h3>${product.title}</h3>
                        <p>${product.description.substring(0, 50)}...</p>
                        <p><strong>Precio: $${product.price}</strong></p>
                        <a href="#" class="btn" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')" role="button" aria-label="Añadir ${product.title} al carrito">Añadir al carrito</a>
                    </div>
                `).join('');
            }

            // Featured products for index.html
            const featuredContainer = document.getElementById('featured-products');
            if (featuredContainer) {
                featuredContainer.innerHTML = products.slice(0, 2).map(product => `
                    <div class="product-card">
                        <div class="image-wrapper">
                            <img src="${product.image}" alt="Imagen de ${product.title}">
                        </div>
                        <h3>${product.title}</h3>
                        <p>${product.description.substring(0, 50)}...</p>
                        <p><strong>Precio: $${product.price}</strong></p>
                        <a href="#" class="btn" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')" role="button" aria-label="Añadir ${product.title} al carrito">Añadir al carrito</a>
                    </div>
                `).join('');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    // Contact form validation
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Por favor, introduce un correo electrónico válido.');
                return;
            }
            contactForm.submit();
        });
    }

    // Login form validation
    const loginForm = document.querySelector('#login form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.querySelector('#login input[name="username"]').value;
            const password = document.querySelector('#login input[name="password"]').value;

            if (!username || !password) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            alert('Inicio de sesión exitoso (simulado).');
            loginForm.submit();
        });
    }

    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    window.addToCart = function (id, title, price, image) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, title, price, image, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        alert(`${title} añadido al carrito.`);
    };

    window.updateCart = function () {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.querySelectorAll('#cart-count');
        if (cartItems) {
            cartItems.innerHTML = cart.length ? cart.map(item => `
                <div class="product-card">
                    <div class="image-wrapper">
                        <img src="${item.image}" alt="Imagen de ${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></p>
                    <button onclick="removeFromCart(${item.id})">Eliminar</button>
                </div>
            `).join('') : '<p>El carrito está vacío.</p>';
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            cartTotal.textContent = total.toFixed(2);
        }
        cartCount.forEach(count => count.textContent = cart.reduce((sum, item) => sum + item.quantity, 0));
    };

    window.updateQuantity = function (id, quantity) {
        const item = cart.find(item => item.id === id);
        if (item && quantity > 0) {
            item.quantity = parseInt(quantity);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    };

    window.removeFromCart = function (id) {
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    window.clearCart = function () {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    // Carousel functionality
    const carousel = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    if (carousel && prevBtn && nextBtn) {
        const reviews = document.querySelectorAll('.carousel-inner .review');
        let index = 0;

        function showReview() {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            index = index > 0 ? index - 1 : reviews.length - 1;
            showReview();
        });

        nextBtn.addEventListener('click', () => {
            index = index < reviews.length - 1 ? index + 1 : 0;
            showReview();
        });
    }

    loadProducts();
    updateCart();
});