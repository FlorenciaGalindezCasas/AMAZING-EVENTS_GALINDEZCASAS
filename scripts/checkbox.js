const divCheck = document.getElementById("checkbox")
const input = document.getElementById("search");


input.addEventListener('input', filtrarCategorias)
divCheck.addEventListener('change', filtrarCategorias)

function filtrarCategorias() {
  // let filtroTexto = filtrarTexto(data.events);
  let filtroCheck = filtrarCheckbox(data.events);
  createCards(filtroCheck);
}


eliminarDuplicado(data.events)

function eliminarDuplicado(eventos){    
   let categorias= ''; 
   let cat = eventos.map(datos => datos.category);
    let setCat = new Set(cat)
    let arrayCat = Array.from(setCat)

    arrayCat.forEach(category => {
        categorias += `
        <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
        <label class="form-check-label" for="${category}">${category}</label>
      `;
      });
      divCheck.innerHTML = categorias;  
}

function filtrarTexto(eventos){
  let textoFiltrado = eventos.filter(datos => datos.name.toLowerCase().includes(input.value))
   return textoFiltrado;
}

function filtrarCheckbox(eventos){
  let checkboxs = document.querySelectorAll("input[type='checkbox']")
  let checks = Array.from(checkboxs)
  let checkeados = checks.filter(check => check.checked)
  let arrayCheckeados = checkeados.map(checksChecked => checksChecked.value);
  console.log(arrayCheckeados)
  let category = eventos.filter(datos => arrayCheckeados.includes(datos.category));
  console.log(category)
  if(arrayCheckeados.length>0){
    return category 
  }
  return eventos;
}











