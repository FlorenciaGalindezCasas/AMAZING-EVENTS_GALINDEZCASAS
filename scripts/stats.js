let tableUp = document.getElementById("catUpcomming");
let tablePast = document.getElementById("catPast");
let tableES = document.getElementById("eventsStat")




async function iniciarTablaUp() {
  let eventos = await getData();
  arrayEventos = eventos.events;
  let currentDate = eventos.currentDate;
  arrayGral = arrayEventos.filter(
    (datos) => Date.parse(currentDate) < Date.parse(datos.date)
  );
  let arrayCat = arrayGral.map((datos) => datos.category);
  let arrayCatFilter = Array.from(new Set(arrayCat));
  createTableUp(
    arrayCatFilter,
    revenuesEvents(arrayCatFilter, arrayGral, "estimate"),
    percentageEvents(arrayCatFilter, arrayGral, 'estimate')
  );
}
iniciarTablaUp();

async function iniciarTablaPast() {
  let eventos = await getData();
  arrayEventos = eventos.events;
  let currentDate = eventos.currentDate;
  arrayGral = arrayEventos.filter(
    (datos) => Date.parse(currentDate) > Date.parse(datos.date)
  );
  let arrayCat = arrayGral.map((datos) => datos.category);
  let arrayCatFilter = Array.from(new Set(arrayCat));
  eventsStatistics(arrayGral);
  createTablePast(
    arrayCatFilter,
    revenuesEvents(arrayCatFilter, arrayGral, "assistance"),
    percentageEvents(arrayCatFilter, arrayGral, 'assistance')
  );
}
iniciarTablaPast();



//Eventos
//indexof del array que corresponda 
let arrayEvents = []
let arrayCap = []
let percent = 0
let capacity = 0
let tablaEvStat = "";
function eventsStatistics(array1){
  array1.forEach(datos =>{ 
      capacity = datos.capacity
      percent = (datos.assistance/datos.capacity)*100
      arrayEvents.push(percent); 
      arrayCap.push(capacity)
      
      return arrayEvents, arrayCap
    }
  )
  let nameMax = arrayEvents.indexOf(Math.max(...arrayEvents));
  let nameEventsMax = array1[nameMax].name
  let nameMin = arrayEvents.indexOf(Math.min(...arrayEvents));
  let nameEventsMin  = array1[nameMin].name;
  let nameLarger = arrayCap.indexOf(Math.max(...arrayCap));
  let nameEventsLarger = array1[nameLarger].name;
  
  tablaEvStat += `<tr>
          <td colspan="3">${nameEventsMax} (${Math.max(...arrayEvents).toFixed(2)}%)</td>         
          <td>${nameEventsMin} (${Math.min(...arrayEvents).toFixed(2)}%)</td> 
          <td>${nameEventsLarger} (${Math.max(...arrayCap)})</td>         
          </tr>`;
  tableES.innerHTML = tablaEvStat;
  }

//Revenues
let arrayRev = []
let arrRevenues = []
let arrayRevenues = []
let revenues = 0; 
function revenuesEvents(array1,array2, assistanceOrEstimate){
array1.forEach(elementos =>{
   arrayRev = array2.filter(datos => datos.category === elementos)
   arrayRev.forEach(datos=> {
    if(assistanceOrEstimate === 'estimate'){
      revenues += datos.price * datos.estimate;
    }else{
      revenues += datos.price * datos.assistance;
    }
   })
   arrRevenues.push(revenues)
   revenues= 0
  })
  arrayRevenues = arrRevenues ;
  arrRevenues=[]
  return arrayRevenues; 
}

//Percentage 
 let arrayPer = []
 let arrPer = [];
 let arrayPercentage = []
 let percentage = 0;
 let sumEstimate = 0;
 let sumCapacity = 0;
function percentageEvents(array1,array2, assistanceOrEstimate){
  array1.forEach(elementos => {
    arrayPer = array2.filter(datos => datos.category === elementos);
    if(assistanceOrEstimate === 'estimate'){
      arrayPer.forEach(datos => {
      sumEstimate += datos.estimate;
      sumCapacity += datos.capacity;
    })
   percentage = (sumEstimate / sumCapacity) * 100;
    arrayPercentage.push(percentage.toFixed(2));
    percentage = 0;
    sumEstimate = 0;
    sumCapacity = 0;
    }else{
      arrayPer.forEach((datos) => {
        sumEstimate += datos.assistance;
        sumCapacity += datos.capacity;
      });
      percentage = (sumEstimate / sumCapacity) * 100;
      arrPer.push(percentage.toFixed(2));
      percentage = 0;
      sumEstimate = 0;
      sumCapacity = 0;
    }
  })
  }

//Tabla Upcoming
let tablaUp = ''
function createTableUp(eventos){  
    eventos.forEach((datos) =>{
      tablaUp += `<tr>
          <td colspan="3">${datos}</td>         
          <td>$${arrayRevenues[eventos.indexOf(datos)]}</td> 
          <td>${arrayPercentage[eventos.indexOf(datos)]}%</td>         
          </tr>`;}       
      )   
    tableUp.innerHTML = tablaUp
}
//Tabla Past
let tablaPast = "";
function createTablePast(eventos) {
  eventos.forEach((datos) => {
    tablaPast += `<tr>
          <td colspan="3">${datos}</td>         
          <td>$${arrayRevenues[eventos.indexOf(datos)]}</td> 
          <td>${arrPer[eventos.indexOf(datos)]}%</td>         
          </tr>`;
  });
  tablePast.innerHTML = tablaPast;
}
