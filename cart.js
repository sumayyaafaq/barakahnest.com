document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-container');
  const cartTotal = document.getElementById('cart-total');
  const cartItems = JSON.parse(localStorage.getItem('barakahCart')) || [];

  function renderCart() {
    if (cartItems.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty 🛒</p>';
      cartTotal.textContent = '';
      return;
    }

    cartContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
      total += item.price * item.quantity;

      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <strong>${item.name}</strong><br>
        Quantity: ${item.quantity}<br>
        Price: AED ${item.price.toFixed(2)}<br>
        <button onclick="removeItem(${index})">Remove</button>
        <hr>
      `;
      cartContainer.appendChild(div);
    });

    cartTotal.textContent = `Total: AED ${total.toFixed(2)}`;
  }

  window.removeItem = function(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('barakahCart', JSON.stringify(cartItems));
    renderCart();
  };

  renderCart();
});
