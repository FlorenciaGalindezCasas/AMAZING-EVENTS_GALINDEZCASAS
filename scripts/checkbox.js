const divCheck = document.getElementById("checkbox")
const input = document.getElementById("search");

let arrayGral = data.events

verCategorias(eliminarDuplicado(data.events));

//Muestra todas las categorias
function verCategorias(eventos){
  let categorias= ''
  eventos.forEach(category =>{
    categorias+= `<input class="form-check-input" type="checkbox" id="${category}" value="${category}">
      <label class="form-check-label" for="${category}">${category}</label>
    `
  });
    divCheck.innerHTML = categorias
    
  }

//Elimina categorias duplicadas
function eliminarDuplicado(eventos){
  let arrayCat = eventos.map(datos => datos.category)
  console.log(arrayCat)
  let arrayCatFilter = Array.from(new Set(arrayCat))
  console.log(arrayCatFilter)  
  return arrayCatFilter
}

//Filtrar por texto
input.addEventListener('input', filtroComb)

function filtrarPorTexto(eventos){
  let filtroTexto = eventos.filter(datos => datos.name.toLowerCase().includes(input.value.toLowerCase())
  )
   return filtroTexto
}

//Filtrar por checkbox
divCheck.addEventListener('change', filtroComb)

function filtrarPorCheckbox(eventos){
  //traer elemento input checkbox
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  //crear array de todos los checkboxs
  let arrayCheckbox = Array.from(checkboxes)
  console.log(arrayCheckbox)
  //filtra array checkbox segun checked 
  let checkboxChecked = arrayCheckbox.filter(check => check.checked)
  console.log(checkboxChecked)  
  //crea array con las categorias (input) checked
  let arrayCheckChecked = checkboxChecked.map(checksChecked => checksChecked.value)
  console.log(arrayCheckChecked)
  //fitra array de obj segun categorias checked
  let arrayCheckFitrado = eventos.filter((datos) => arrayCheckChecked.includes(datos.category));
  console.log(arrayCheckFitrado)
  //condicional, si el largo del array de checkbox checked es mayor a 1, es decir se checkeo por lo menos una checkbox, retorna el array con los objetos que coinciden con la categoria de la checkbox, sino retorna el array de obj sin filtrar
  if (checkboxChecked.length > 0) {
    return arrayCheckFitrado;
  }
  return eventos;
}


//Filtro combinado
function filtroComb(){
  createCards(filtrarPorCheckbox(filtrarPorTexto(arrayGral)));
}
