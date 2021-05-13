// dirección archivo
function mostrarElementos() {
  const datos = "js/datos.json";
  const contenedorRaciones = document.getElementById("raciones");
  const contenedorEnsaladas = document.getElementById("ensaladas");
  const contenedorPostres = document.getElementById("postres");
  //función para traer los datos
  function obtenerDatos() {
    fetch("js/datos.json")
      .then((response) => response.json())
      .then((raciones) => {
        let vista = raciones["raciones"]
          .map((racion) => {
            return `<div class="px-4 py-2 racion__item text-uppercase">
           <div class="d-flex justify-content-between items-center">
           <div>
           <p class="font-thin leading-tight">${racion.nombre} </p>
           </div>
           <span class="ms-4 flex-shrink-0 font-thin">${racion.precio}</span>
           </div>
           </div>`;
          })
          .join("");

        contenedorRaciones.innerHTML += vista;

        vista = raciones["ensaladas"]
          .map((ensalada) => {
            return `<div class="px-4 py-2 racion__item text-uppercase">
            <div class="d-flex justify-content-between items-center">
            <div>
            <p class="font-thin leading-tight">${ensalada.nombre} </p>
            </div>
            <span class="ms-4 flex-shrink-0 font-thin">${ensalada.precio}</span>
            </div>
            </div>`;
          })
          .join("");

        contenedorEnsaladas.innerHTML += vista;

        vista = raciones["postres"]
          .map((postre) => {
            return `<div class="px-4 py-2 racion__item text-uppercase">
            <div class="d-flex justify-content-between items-center">
            <div>
            <p class="font-thin leading-tight">${postre.nombre} </p>
            </div>
            <span class="ms-4 flex-shrink-0 font-thin">${postre.precio}</span>
            </div>
            </div>`;
          })
          .join("");

        contenedorPostres.innerHTML += vista;
      });
  }

  obtenerDatos();
}

window.addEventListener("DOMContentLoaded", mostrarElementos);
