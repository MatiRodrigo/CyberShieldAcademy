# 🛡️ CyberShield Academy

> *Práctica Profesional I - Proyecto Integrador*

![Etapa 1](https://img.shields.io/badge/Etapa%201-Completada-brightgreen?style=for-the-badge)
![Etapa 2](https://img.shields.io/badge/Etapa%202-Completada-brightgreen?style=for-the-badge)
![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-brightgreen?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📋 Información académica

| Campo               | Detalle                           |
|---------------------|-----------------------------------|
| **Asignatura**      | Práctica Profesional I           |
| **Docente**         | Prof. Martín Rodriguez           |
| **Carrera**         | Desarrollo de Software           |
| **Año / Ciclo**     | 2026                              |
| **Modalidad**       | Individual                        |
| **Alumno**          | Matías Rodrigo                    |
| **Herramienta**     | Stich                             |

---

## 📄 Descripción del proyecto

**CyberShield Academy** es una plataforma web de formación especializada en **ciberseguridad**, diseñada para formar a la próxima generación de expertos en defensa digital. El sitio busca posicionar a la academia como un referente global, ofreciendo una experiencia inmersiva que refleja la precisión, el rigor técnico y la ética propios de la industria.

En esta etapa del proyecto integrador se incorporó **renderizado dinámico de contenidos mediante JavaScript asíncrono y consumo de APIs/archivos JSON locales**, evolucionando la maquetación estática hacia una aplicación web funcional e interactiva.

---

## 🗂️ Estructura del sitio y componentes

El sitio está compuesto por **5 páginas principales** y módulos de renderizado dinámico:

| # | Página        | Descripción / Funcionalidad Dinámica                                          |
|---|---------------|-------------------------------------------------------------------------------|
| 1 | **Index**     | Landing page. Carga dinámicamente el catálogo de cursos desde `cursos.json`.   |
| 2 | **Servicios** | Catálogo completo de programas de formación en ciberseguridad.                |
| 3 | **Acerca de** | Muestra la historia, visión e instructores maquetados desde `instructores.json`.|
| 4 | **Contacto**  | Formulario de contacto y enrutamiento desde los botones de selección de curso. |
| 5 | **Noticias**  | Blog con novedades del sector y actualizaciones de la academia.                |

---

## ⚙️ Arquitectura de datos y lógica JS

El proyecto utiliza una arquitectura basada en **asincronismo (`fetch`) y manipulación del DOM**:


```text
├── data/
│   ├── cursos.json        # Almacena el catálogo de cursos (títulos, imágenes, niveles, etc.)
│   └── instructores.json  # Datos del equipo de instructores (roles, imágenes, experiencia)
└── js/
    ├── main_index.js      # Consume cursos.json y renderiza las tarjetas dinámicas (.course-card)
    └── main_nosotros.js   # Consume instructores.json e inyecta la grilla de equipo en #lista-instructores
```

---

## 🎯 Objetivos comerciales y técnicos

- 🧲 **Captación de leads** – Generar consultas mediante formularios de contacto y suscripciones.
- 📈 **Conversión de matrículas** – Presentar cursos dinámicos con botones de acción directa a contacto.
- ⚡ **Renderizado eficiente** – Desacoplar la estructura HTML de los datos mediante JSON y JS.
- 🤝 **Construcción de confianza** – Exhibir instructores y testimonios cargados dinámicamente.
- 🏷️ **Posicionamiento de marca** – Proyectar una identidad moderna con estética tipo terminal.

---

## 🛠️ Ficha técnica

| Área           | Tecnologías / Recursos                                          |
|----------------|------------------------------------------------------------------|
| **Frontend**   | HTML5, CSS3, JavaScript (ES6+, Fetch API, DOM Manipulation)      |
| **Datos**      | JSON (Estructuras de datos locales para cursos e instructores)   |
| **Framework**  | Bootstrap 5 (diseño responsivo y sistema de grillas)            |
| **Herramienta**| Stich (prototipado y maquetación)                                |
| **Fuentes**    | Inter (cuerpo), JetBrains Mono (código), Material Symbols        |

---

## 🎨 Justificación de diseño

### UX/UI & Lógica Interactiva
- Navegación fija y jerarquía visual clara.
- **Inyección dinámica:** Generación modular de componentes UI (tarjetas y grillas) a partir de arrays JSON.
- Reorganización de enrutamiento interno entre catálogo de cursos y la sección de contacto.
- Elementos estéticos que simulan una **terminal de comandos** para reforzar el ambiente ciberseguro.

### Paleta de colores
- Tonos oscuros profundos (`#131315` y `#0a192f`) que evocan entornos de monitorización.
- Verde neón (`#40e56c`) como acento principal, simbolizando seguridad y sistemas activos.

---

## 👨‍💻 Autor
Matías Rodrigo  
[GitHub](https://github.com/MatiRodrigo) • [LinkedIn](https://www.linkedin.com/in/matias-rodrigo)

---

## 🌐 Ver el proyecto en vivo

👉 [Hacé clic acá para ver el proyecto](https://matirodrigo.github.io/CyberShieldAcademy/)
