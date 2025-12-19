let cartCount = localStorage.getItem("cartCount") || 0;
const cartIcon = document.querySelector(".fa-cart-plus");

updateCartUI();

// ===============================
// ADD TO CART
// ===============================
document.querySelectorAll(".buy-now").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    updateCartUI();
    showToast("Item added to cart");
  });
});

// ===============================
// UPDATE CART UI
// ===============================
function updateCartUI() {
  let badge = document.querySelector(".cart-badge");

  if (!badge) {
    badge = document.createElement("span");
    badge.classList.add("cart-badge");
    badge.style.cssText = `
      background:red;
      color:white;
      border-radius:50%;
      padding:2px 6px;
      font-size:12px;
      position:absolute;
      top:5px;
      right:5px;
    `;
    cartIcon.parentElement.style.position = "relative";
    cartIcon.parentElement.appendChild(badge);
  }

  badge.innerText = cartCount;
}

// ===============================
// TOAST MESSAGE
// ===============================
function showToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;
  toast.style.cssText = `
    position:fixed;
    bottom:30px;
    right:30px;
    background:#28a745;
    color:#fff;
    padding:12px 20px;
    border-radius:5px;
    z-index:9999;
    animation:fadein 0.3s;
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
