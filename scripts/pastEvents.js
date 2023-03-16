let currentDate = data.currentDate;

function pastEvents(eventos){      
       arrayGral = eventos.filter(datos => Date.parse(currentDate) > Date.parse(datos.date))
       createCards(arrayGral)
       console.log(arrayGral)
    } 
pastEvents(arrayGral);

