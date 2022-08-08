function resultadoFinal(final) {
  const contenedorEl = document.querySelector(".contenedor");
  console.log(final);
  const combo = [
    {
      path: /\/evento-uno/,
      function: () =>
        (contenedorEl.textContent = "texto agregado del evento uno"),
    },
    {
      path: /\/evento-dos/,
      function: () =>
        (contenedorEl.textContent = "texto agregado del evento dos"),
    },
    {
      path: /\/evento-search/,
      function: () => (contenedorEl.textContent = "buscardor"),
    },
  ];

  for (const r of combo) {
    if (r.path.test(final)) {
      r.function();
    }
  }
}

function unificador(uni) {
  history.pushState({}, "", uni);
  resultadoFinal(uni);
}

(function () {
  const botonUno = document.querySelector(".boton-uno");
  const botonDos = document.querySelector(".boton-dos");
  const botonSearch = document.querySelector(".boton-search");

  botonUno.addEventListener("click", () => unificador(`/evento-uno`));
  botonDos.addEventListener("click", () => unificador(`/evento-dos`));
  botonSearch.addEventListener("click", () => unificador(`/evento-search`));

  window.addEventListener("load", () => {
    resultadoFinal(location.pathname);
  });
})();
