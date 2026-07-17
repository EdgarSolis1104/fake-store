export default function productCard (item) {
  return `
    <div class="card">
      <a href="#/product/${item.id}" class="card-link">
        <div class="card-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <span class="card-category">${item.category}</span>
        <h2 class="card-title">${item.title}</h2>
        <p class="card-description">${item.description}</p>
        <p class="card-price">$${item.price}</p>
      </a>
      <a href="#" class="card-btn">Agregar al carrito</a>
    </div>
  `
}