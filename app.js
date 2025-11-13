const products = [
  { id: 1, name: "Camiseta básica", price: 19.9 },
  { id: 2, name: "Jeans clásicos", price: 39.9 },
  { id: 3, name: "Gorra", price: 12.5 }
];

const productsEl = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
let cartCount = 0;

function render() {
  productsEl.innerHTML = products.map(p => `
    <article class="product">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button data-id="${p.id}">Agregar</button>
    </article>
  `).join("");
  productsEl.querySelectorAll("button").forEach(b=>{
    b.addEventListener("click", () => {
      cartCount++;
      cartBtn.textContent = `Carrito (${cartCount})`;
    });
  });
}

document.addEventListener("DOMContentLoaded", render);