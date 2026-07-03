# Avance 1 — Semana 2: Arquitectura y Prototipo Funcional

## Resumen de lo hecho

- Estructura HTML base del sitio (`index.html`): header con logo y navbar, contenedor principal `#app`, footer.
- Primera iteración de estilos (`style.css`): estilos base, header/nav, grid de productos, cards, estados de carga/error, y breakpoints responsive para tablet (≤768px) y mobile (≤480px).
- API client (`js/api/fakeStore.js`) conectado a `https://fakestoreapi.com`, con los métodos:
  - `getAllProducts(limit)`
  - `getProduct(id)`
  - `getCategories()`
  - `getProductsByCategory(category)`
- Listado básico de productos (`js/main.js`, `js/components/products.js`, `js/components/productCard.js`): consume la API, renderiza el grid de productos, y maneja estados de carga y error (con botón de reintentar).

## Problemas encontrados

- El array de productos renderizado con `.map().join("")` requería el `.join("")` explícito; sin él, `innerHTML` insertaba comas sueltas entre cada card (ya documentado como comentario en el código).
- El API client original solo tenía `getAllProducts()` sin parámetros; se amplió para soportar `limit` y se agregaron los métodos de categorías y detalle de producto que se van a necesitar en las próximas semanas (filtros, búsqueda, página de detalle).
- No existía configuración de ESLint ni breakpoints responsive; se agregaron ambos en este avance.

## Próximos pasos (Semana 3)

- Implementar el router (hash routing) para las rutas `/`, `/product/:id`, `/cart`, `/users`, `/404`.
- Implementar filtrado por categoría (RF-002) usando `getProductsByCategory`.
- Implementar búsqueda client-side con debounce (RF-004).
- Implementar página de detalle de producto (RF-005) usando `getProduct`.
- Empezar el módulo de carrito de compras (RF-003): store, persistencia en `localStorage`, badge en navbar.