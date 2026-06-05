const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  let count = 0;

  cart.forEach((item) => {
    count += item.quantity;
  });

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    if (count > 0) {
      cartCount.style.display = "flex";

      cartCount.innerText = count;
    } else {
      cartCount.style.display = "none";
    }
  }
}

function displayCart() {
  if (!cartItems) return;

  let total = 0;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `

      <p>Your cart is empty.</p>

    `;

    cartTotal.innerText = 0;

    updateCartCount();

    return;
  }

  cart.forEach((item) => {
    total += item.price * item.quantity;

    cartItems.innerHTML += `

      <div class="cart-card">

        <img
          src="${item.image}"
          class="cart-image">

        <div class="cart-info">

          <h3>${item.name}</h3>

          <p>
            ₦${item.price}
          </p>

          <div class="quantity-controls">

            <button
              onclick="decreaseQuantity(${item.id})">

              -

            </button>

            <span>${item.quantity}</span>

            <button
              onclick="increaseQuantity(${item.id})">

              +

            </button>

          </div>

          <button
            class="remove-btn"
            onclick="removeItem(${item.id})">

            Remove

          </button>

        </div>

      </div>

    `;
  });

  cartTotal.innerText = total;

  updateCartCount();
}

function increaseQuantity(id) {
  const item = cart.find((product) => product.id === id);

  if (item) {
    item.quantity += 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function decreaseQuantity(id) {
  const item = cart.find((product) => product.id === id);

  if (item && item.quantity > 1) {
    item.quantity -= 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

displayCart();

const checkoutBtn = document.getElementById("checkout-btn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    let message = "Hello, I would like to place an order:%0A%0A";

    cart.forEach((item) => {
      message += `${item.name} x${item.quantity} - ₦${item.price * item.quantity}%0A`;
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    message += `%0ATotal: ₦${total}`;

    window.open(`https://wa.me/2349016791304?text=${message}`);
  });
}
