async function iniciar() {
  let eventos = await getData();
  arrayGral = eventos.events;
  createCards(arrayGral);
  verCategorias(eliminarDuplicado(arrayGral));
}
iniciar()