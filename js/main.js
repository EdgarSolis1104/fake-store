import products from "./components/products.js"
import { getAllProducts } from "./api/fakeStore.js"
 
const App = document.querySelector("#app")
 
async function init () {
  App.innerHTML = "<p class=\"state-message\">Cargando productos...</p>"
 
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
 
init()
 