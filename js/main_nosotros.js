fetch("../data/instructores.json")
    .then((response) => response.json())
    .then((instructores) => {
        const container = document.getElementById("lista-instructores");

        instructores.forEach((instructor) => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "col-md-6 col-lg-3";
            
            tarjeta.innerHTML = `
                <div class="card card-custom h-100 p-0 position-relative">
                    <div class="lvl-badge z-3">${instructor.lvl}</div>
                    <img src="${instructor.imagen}" class="card-img-top img-grayscale w-100 object-fit-cover img-instructor">
                    <div class="card-body p-3 border-top border">
                        <div class="font-mono text-accent mb-1 ls-wide text-uppercase font-size-10">${instructor.subtitulo}</div>
                        <h4 class="h6 mb-1 fw-bold">${instructor.nombre}</h4>
                        <p class="text-muted-custom mb-3 font-size-12">${instructor.rol}</p>
                        <div class="d-flex gap-2">
                            <span class="material-symbols-outlined fs-6 text-muted-custom">share</span>
                            <span class="material-symbols-outlined fs-6 text-muted-custom">mail</span>
                        </div>
                    </div>
                </div>
            `;

            container.appendChild(tarjeta);
        });
    })
    .catch((error) => {
        console.error("Error al cargar los instructores:", error);
        console.log("Siempre buscando el pelo al huevo...");
    });
