let products = [
  {
    id: "1",
    title: "BMW",
    price: 200,
    Categoria: "Autos",
    imagen:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qk1XfGVufDB8fDB8fHwy",
    quanty: 1,
  },
  {
    id: "2",
    title: "Nissan",
    price: 500,
    Categoria: "Camionetas",
    imagen:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qk1XfGVufDB8fDB8fHwy",
    quanty: 1,
  },
  {
    id: "3",
    title: "Taza",
    price: 100,
    Categoria: "Repuestos",
    imagen:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qk1XfGVufDB8fDB8fHwy",
    quanty: 1,
  },
  {
    id: "4",
    title: "Honda",
    price: 600,
    Categoria: "Autos",
    imagen:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fDB8fHwy",
    quanty: 1,
  },
  {
    id: "5",
    title: "Amarok",
    price: 100,
    Categoria: "Camionetas",
    imagen:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fDB8fHwy",
    quanty: 1,
  },
  {
    id: "6",
    title: "faro",
    price: 150,
    Categoria: "Repuestos",
    imagen:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fDB8fHwy",
    quanty: 1,
  },
];
let contador = 7; // Inicia desde 7 ya que ya hay 6 productos
let formulario = document.querySelector("form");
let containerProducts = document.querySelector("#containerProducts");
let cart = [];

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let product = {
    id: contador.toString(),
    title: productTitle,
    price: Number(productPrice),
    categoria: productCategory,
    quanty: Number(productQuanty),
    imagen:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fDB8fHwy",
  };
  products.push(product);
  contador++;
  renderProducts();
});

let inputTitle = document.getElementById("title");
let productTitle = "";
inputTitle.addEventListener("input", () => {
  productTitle = inputTitle.value;
});
let inputCategory = document.getElementById("category");
let productCategory = "";
inputCategory.addEventListener("input", () => {
  productCategory = inputCategory.value;
});
let inputPrice = document.getElementById("price");
let productPrice = "";
inputPrice.addEventListener("input", () => {
  productPrice = inputPrice.value;
});
let inputQuanty = document.getElementById("quanty");
let productQuanty = "";
inputQuanty.addEventListener("input", () => {
  productQuanty = inputQuanty.value;
});

const renderProducts = () => {
  containerProducts.innerHTML = "";
  products.forEach((elemento) => {
    let productCard = document.createElement("div");
    productCard.innerHTML = `
        <img src="${elemento.imagen}" />
        <h2>${elemento.title}</h2>
        <h3>${elemento.price} USD</h3>
        <button class="buyButton" data-product-id="${elemento.id}">Comprar</button>`;
    productCard.className = "card";
    containerProducts.appendChild(productCard);
  });

  document.querySelectorAll(".buyButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-product-id");
      const product = products.find((p) => p.id === productId);
      if (product) {
        cart.push(product);
        displayCart();
      }
    });
  });
};

const displayCart = () => {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
      `;
    cartContainer.appendChild(cartItem);
  });

  const totalContainer = document.getElementById("total");
  totalContainer.innerHTML = `Total: $${calculateTotal()}`;
};

const calculateTotal = () => {
  return cart.reduce((sum, product) => sum + product.price, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
