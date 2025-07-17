# Proyecto Final de E-commerce

## Descripción

Tienda Online es un proyecto de comercio electrónico desarrollado como parte de un ejercicio académico. La aplicación permite a los usuarios explorar productos obtenidos de la Fake Store API, añadirlos a un carrito de compras, contactar al equipo a través de un formulario, y visualizar reseñas de clientes. El proyecto utiliza tecnologías web modernas, asegurando un diseño responsivo, accesibilidad, y optimización para SEO.

## Estructura del Proyecto
- `index.html`: Página principal con barra de búsqueda, productos destacados y carrusel de reseñas.
- `products.html`: Página con todos los productos en tarjetas.
- `contact.html`: Página con formulario de contacto.
- `login.html`: Página con formulario de inicio de sesión.
- `styles.css`: Estilos aplicados para diseño responsivo y accesibilidad.
- `assets/`: Carpeta con imágenes utilizadas.
- `README.md`: Este archivo.

## Características
- Estructura HTML Semántica: Uso de etiquetas como header, nav, main, section y footer para una estructura clara y accesible.

- Formulario de Contacto: Formulario funcional en contact.html con validación JavaScript para campos requeridos y formato de correo electrónico, integrado con Formspree.

- Estilos CSS:

- Estilos para <header>, <footer> y <nav> con degradados y colores de alto contraste.

- Uso de Google Fonts (Roboto) para tipografía.

- Fondos variados (degradado en header, imagen en #productos, color en #inicio).

### Diseño Responsivo:

- Sección "Productos" usa Flexbox para mostrar tarjetas de productos.

- Sección "Reseñas" usa CSS Grid para una disposición responsiva.

- Media Queries en contact.html y login.html para pantallas pequeñas.


### Contenido Multimedia:

- Video de fondo en #inicio (index.html).

- Imágenes de productos obtenidas dinámicamente desde la Fake Store API con atributos alt descriptivos.

### Navegación: 
- Menú de navegación en todas las páginas con enlaces a Inicio, Productos, Contacto, Iniciar Sesión y Carrito, con un contador dinámico del carrito.

### JavaScript:

- Consumo de la Fake Store API (https://fakestoreapi.com/products?limit=4) para mostrar productos en products.html y productos destacados en index.html.

- Validación de formularios (contacto e inicio de sesión) con alertas para campos vacíos o formatos inválidos.

- Manipulación del DOM para actualizar el carrito y mostrar mensajes al usuario.

### Carrito de Compras:

- Permite añadir productos al carrito, editar cantidades, eliminar productos y vaciar el carrito.

- Usa localStorage para persistencia.

- Muestra un contador dinámico en la navegación y el total en cart.html.

### SEO y Accesibilidad:

- Metaetiquetas SEO (description, keywords, author) en todas las páginas.

- Atributos alt en imágenes y ARIA (aria-label, aria-current, role) para accesibilidad.

- Navegación por teclado y fuentes grandes para alto contraste.

## Tecnologías
- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (para el carrusel de reseñas)
- Google Fonts
- Formspree

## Demo

Live site: [Your URL here]