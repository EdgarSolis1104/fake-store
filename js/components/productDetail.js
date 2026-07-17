export default function productDetail (item) {
  return `
    <div class="product-detail">
      <div class="detail-image">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="detail-info">
        <span class="card-category">${item.category}</span>
        <h2 class="card-title">${item.title}</h2>
        <p class="card-description">${item.description}</p>
        <p class="card-price">$${item.price}</p>
        ${item.rating ? `<p class="detail-rating">⭐ ${item.rating.rate} (${item.rating.count} reseñas)</p>` : ""}
        <div class="detail-actions">
          <button id="add-to-cart-btn" class="card-btn" data-id="${item.id}">Agregar al carrito</button>
          <a href="#/" class="back-link">← Volver al listado</a>
        </div>
      </div>
    </div>
  `
}