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
            return `<article class="racion__item text-uppercase">
           <div>${racion.nombre}</div>
           <div>${racion.precio}</div>
        `;
          })
          .join("");

        contenedorRaciones.innerHTML = vista;

        vista = raciones["ensaladas"]
          .map((ensalada) => {
            return `<article class="racion__item text-uppercase">
           <div>${ensalada.nombre}</div>
           <div>${ensalada.precio}</div>
        `;
          })
          .join("");

        contenedorEnsaladas.innerHTML = vista;

        vista = raciones["postres"]
          .map((postre) => {
            return `<article class="racion__item text-uppercase">
           <div>${postre.nombre}</div>
           <div>${postre.precio}</div>
        `;
          })
          .join("");

        contenedorPostres.innerHTML = vista;
      });
  }

  obtenerDatos();
}

window.addEventListener("DOMContentLoaded", mostrarElementos);
