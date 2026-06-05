const products = [
  {
    id: 1,
    name: "Luxury Bracelet",
    price: 25000,
    category: "Bracelets",
    image: "images/product/bracletcombo.jpeg",
  },

  {
    id: 2,
    name: "Necklace",
    price: 15000,
    category: "Necklaces",
    image: "images/product/arabiccutoutnecklace.jpeg",
  },

  {
    id: 3,
    name: "Gold Watch",
    price: 30000,
    category: "Watches",
    image: "images/product/poedagarwatch.jpeg",
  },

  {
    id: 4,
    name: "Necklace",
    price: 13500,
    category: "Necklace",
    image: "images/product/butterflycutout.jpeg",
  },

  {
    id: 5,
    name: "Necklace",
    price: 10500,
    category: "Necklace",
    image: "images/product/necklaceengraved.jpeg",
  },
];

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

function addToCart(id) {
  const product = products.find((item) => item.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert(product.name + " added to cart");
}

function displayProducts(containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `

      <div class="product-card">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image">

        <div class="product-info">

          <h3>${product.name}</h3>

          <p class="price">
            ₦${product.price}
          </p>

          <button
            class="add-cart"
            onclick="addToCart(${product.id})">

            Add To Cart

          </button>

        </div>

      </div>

    `;
  });
}

updateCartCount();
