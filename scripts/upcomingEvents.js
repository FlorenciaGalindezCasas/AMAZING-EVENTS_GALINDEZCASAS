let currentDate = data.currentDate;

function upcomingEvents(eventos) {
  let upcomingEvent = eventos.filter(
    (datos) => Date.parse(currentDate) < Date.parse(datos.date)
  );
  createCards(upcomingEvent);
}
upcomingEvents(data.events);

