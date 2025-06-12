function addToCart(productName) {
  alert(`Added "${productName}" to your cart!`);
}

function subscribe(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const msg = document.getElementById('newsletter-msg');
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    msg.textContent = 'Please enter a valid email address.';
    msg.style.color = '#ffcccb'; // light red
    emailInput.focus();
    return;
  }

  msg.textContent = 'Thank you for subscribing! You’ll hear from us soon.';
  msg.style.color = '#d4edda'; // light green
  emailInput.value = '';
}
