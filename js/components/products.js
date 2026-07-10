import productCard from "./productCard.js"
 
export default function products (products) {
  // .join("") es clave: sin esto, innerHTML convierte el array
  // a string uniendo cada card con comas, y se ven comas sueltas en la página.
  return products.map(product => productCard(product)).join("")
}
 