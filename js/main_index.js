fetch("data/cursos.json")
  .then((response) => response.json())
  .then((cursos) => {
    const container = document.getElementById("lista-cursos");

    cursos.forEach((curso) => {
      const columna = document.createElement("div");
      columna.className = "col-md-4";

      columna.innerHTML = `
        <div class="card h-100 border-0 course-card">
            <div class="course-img-wrapper">
                <img src="${curso.imagen}"/>
                <div class="course-badge">Inscripciones Abiertas</div>
            </div>
            <div class="card-body p-4">
                <h4 class="hh4 fw-bold mb-2">${curso.titulo}</h4>
                <p class="text-secondary small mb-4">${curso.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-green font-mono small">${curso.nivel}</span>
                    <a href="templates/contacto.html" class="btn btn-curso btn-outline-success btn-sm d-flex align-items-center justify-content-center text-decoration-none">
                        <span class="material-symbols-outlined">add</span>
                    </a>
                </div>
            </div>
        </div>
      `;

      container.appendChild(columna);
    });
  })
  .catch((error) => {
    console.error("Error al cargar los cursos:", error);
    console.log("Siempre buscando el pelo al huevo...");
  });
