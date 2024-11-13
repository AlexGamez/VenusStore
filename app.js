// Variables del carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar productos al carrito
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.querySelector('h3').textContent; // Nombre del producto
        const price = parseFloat(product.querySelector('p').textContent.replace('$', '')); // Precio del producto

        // Verificar si el producto ya está en el carrito
        const existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert('Producto agregado al carrito.');
    });
});

// Actualiza la visualización del carrito
function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total p');
    cartItemsContainer.innerHTML = ''; // Limpiar los items actuales
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const productElement = document.createElement('div');
            productElement.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItemsContainer.appendChild(productElement);
            totalPrice += item.price * item.quantity;
        });
    }

    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Inicializar la visualización del carrito al cargar la página
updateCartDisplay();

// Manejar el botón de "Proceder al pago"
document.querySelector('.btn-checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de proceder al pago.');
    } else {
        alert('Procediendo al pago...');
        // Aquí puedes redirigir a una página de pago real si lo deseas
    }
});


