const BASE_URL = "https://fakestoreapi.com"

/**
 * Obtiene todos los productos.
 * @param {number} [limit] - Cantidad máxima de productos a devolver (opcional).
 * @returns {Promise<Array>} Lista de productos.
 */
export async function getAllProducts (limit) {
  const url = limit ? `${BASE_URL}/products?limit=${limit}` : `${BASE_URL}/products`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudieron obtener los productos`)
  }

  return response.json()
}

/**
 * Obtiene un producto individual por su id.
 * @param {number|string} id - Id del producto.
 * @returns {Promise<Object>} El producto solicitado.
 */
export async function getProduct (id) {
  const response = await fetch(`${BASE_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudo obtener el producto`)
  }

  return response.json()
}

/**
 * Obtiene la lista de categorías disponibles.
 * @returns {Promise<Array<string>>} Lista de categorías.
 */
export async function getCategories () {
  const response = await fetch(`${BASE_URL}/products/categories`)

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudieron obtener las categorías`)
  }

  return response.json()
}

/**
 * Obtiene los productos de una categoría específica.
 * @param {string} category - Nombre de la categoría.
 * @returns {Promise<Array>} Lista de productos de esa categoría.
 */
export async function getProductsByCategory (category) {
  const response = await fetch(`${BASE_URL}/products/category/${category}`)

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudieron obtener los productos de la categoría`)
  }

  return response.json()
}