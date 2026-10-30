# 📝 Registro de Cambios (Changelog)

Todos los cambios notables en el proyecto **CyberShield Academy** serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [0.2.0] - 2026-05-15 (Etapa 2 - Carga Dinámica con JS y JSON)

### 🌟 Añadido
* 📚 **Archivo de datos `cursos.json`:** Estructura JSON para almacenar dinámicamente títulos, descripciones, niveles y recursos de los cursos.
* 👨‍🏫 **Archivo de datos `instructores.json`:** Estructura de datos para gestionar la información del equipo operativo (roles, imágenes y niveles).
* 🏠 **Script `main_index.js`:** Lógica de JavaScript para el consumo asíncrono (`fetch`) y renderizado modular de tarjetas en el catálogo inicial (`#lista-cursos`).
* 👥 **Script `main_nosotros.js`:** Lógica en JavaScript para la maquetación e inyección dinámica del equipo en la sección "Acerca de" (`#lista-instructores`).

### 🛠️ Modificado y Corregido
* 🔗 **Enrutamiento e interacción en tarjetas:** Se corrigió la estructura HTML en `main_index.js` sustituyendo elementos `<button>` inválidos por etiquetas `<a>` estilizadas (`.btn`) apuntando hacia `templates/contacto.html`.
* ⚙️ **Rutas de scripts:** Se corrigieron los errores de sintaxis en las etiquetas de importación dentro del HTML (de `..js/` a `../js/`).

### 🗑️ Eliminado
* 🧹 **Lógica redundantemente estática:** Eliminación de la decoración tipo log en la consola del pie de página (`index.html`) para un código más limpio.

---

## [0.1.0] - 2026-05-01 (Etapa 1 - Maquetado Inicial)

### 🌟 Añadido
* 🎨 **Maquetado estático inicial:** Creación de las 5 páginas principales (`Index`, `Servicios`, `Acerca de`, `Contacto` y `Noticias`).
* 🎨 **Estilos y Maquetación:** Implementación de Bootstrap 5, paleta de colores estilo terminal (`#131315`, `#0a192f`, `#40e56c`) y tipografías *Inter* y *JetBrains Mono*.