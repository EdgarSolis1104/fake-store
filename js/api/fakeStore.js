const BASE_URL = "https://fakestoreapi.com"
 
export async function getAllProducts () {
  const response = await fetch(`${BASE_URL}/products`)
 
  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudieron obtener los productos`)
  }
 
  return response.json()
}
 