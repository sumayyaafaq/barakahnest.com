// Featured product slider (you can enhance this later)
let slideIndex = 0;
const slides = document.querySelectorAll('.featured-products .slide');

function showSlides() {
  slides.forEach((slide, idx) => {
    slide.style.display = 'none';
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = 'block';
  setTimeout(showSlides, 3000); // 3s per slide
}

document.addEventListener('DOMContentLoaded', () => {
  if (slides.length > 0) showSlides();
});

// Order tracking mock
function mockTrack() {
  const input = document.querySelector('#orderInput');
  const result = document.querySelector('#tracking-result');
  if (input && result) {
    const orderId = input.value.trim();
    result.innerText = orderId
      ? `📦 Order ${orderId} is being prepared for shipment.`
      : "❗ Please enter a valid order number.";
  }
}
function trackOrder() {
  const input = document.getElementById('orderInput').value.trim();
  const resultBox = document.getElementById('trackingResult');

  if (input === '') {
    resultBox.innerHTML = `<p class="error">❌ Please enter your order number.</p>`;
    return;
  }

  // Mock logic — You can replace this with real API later
  const mockData = {
    "BK-2025-00123": "📦 Shipped — Out for delivery in Karachi, PK.",
    "BK-2025-00456": "✅ Delivered — Received on July 5, 2025.",
    "BK-2025-00987": "🛠️ Processing — Being prepared in our studio.",
  };

  if (mockData[input]) {
    resultBox.innerHTML = `<p class="success">${mockData[input]}</p>`;
  } else {
    resultBox.innerHTML = `<p class="error">⚠️ No order found with that number. Please check and try again.</p>`;
  }
}
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('barakahCart')) || [];
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem('barakahCart', JSON.stringify(cart));
  alert(`${name} added to your cart!`);
}
function addToWishlist(name, price) {
  const wishlist = JSON.parse(localStorage.getItem('barakahWishlist')) || [];

  const existing = wishlist.find(item => item.name === name);
  if (existing) {
    alert(`${name} is already in your wishlist.`);
    return;
  }

  wishlist.push({ name, price });
  localStorage.setItem('barakahWishlist', JSON.stringify(wishlist));
  alert(`${name} added to your wishlist!`);
}
