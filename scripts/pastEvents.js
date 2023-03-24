async function pastEvents() {
  let eventos = await getData();
  arrayEventos = eventos.events;
  let currentDate = eventos.currentDate;
  arrayGral = arrayEventos.filter(
    (datos) => Date.parse(currentDate) > Date.parse(datos.date)
  );
  createCards(arrayGral);
  verCategorias(eliminarDuplicado(arrayEventos));  
}
pastEvents();