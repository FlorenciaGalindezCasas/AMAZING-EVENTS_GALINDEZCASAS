let currentDate = data.currentDate;

function upcomingEvents(eventos) {
  arrayGral= eventos.filter(
    (datos) => Date.parse(currentDate) < Date.parse(datos.date)
  );
  createCards(arrayGral);
}
upcomingEvents(arrayGral);

