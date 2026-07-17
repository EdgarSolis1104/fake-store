import products from "./components/products.js"
import productDetail from "./components/productDetail.js"
import { getAllProducts, getProduct } from "./api/fakeStore.js"

const App = document.querySelector("#app")

function router() {
  const hash = window.location.hash || "#/"

  if (hash.startsWith("#/product/")) {
    const id = hash.split("/")[2]
    renderProductDetail(id)
    return
  }

  init()
}

window.addEventListener("hashchange", router)
window.addEventListener("DOMContentLoaded", router)

async function init () {
  App.innerHTML = `<p class="state-message">Cargando productos...</p>`

  try {
    const productos = await getAllProducts()
    App.innerHTML = `<div class="grid">${products(productos)}</div>`
  } catch (error) {
    console.error(error)
    App.innerHTML = `
      <div class="state-message error">
        <p>⚠ No se pudieron cargar los productos.</p>
        <p class="error-detail">Revisa tu conexión e inténtalo de nuevo.</p>
        <button id="retry-btn">Reintentar</button>
      </div>
    `
    document.querySelector("#retry-btn").addEventListener("click", init)
  }
}

async function renderProductDetail(id) {
  App.innerHTML = `<p class="state-message">Cargando producto...</p>`

  try {
    const item = await getProduct(id)
    document.title = `${item.title} — Fake Store`
    App.innerHTML = productDetail(item)

    document.querySelector("#add-to-cart-btn").addEventListener("click", () => {
      console.log("Agregado al carrito:", item.id)
      // TODO: conectar con el carrito cuando esté listo (RF-003)
    })
  } catch (error) {
    console.error(error)
    App.innerHTML = `<p class="state-message">No se pudo cargar el producto.</p>`
  }
}