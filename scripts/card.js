const divCards = document.getElementById("cards");

function createCards(eventos){
 if (eventos.length === 0) {
   divCards.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`;
   return
}  
let cards = "";
eventos.forEach(datos => {  
    cards += ` 
      <div class="card" style="width: 18rem">
        <img src="${datos.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h6>${datos.date}</h6>
          <h5 class="card-title">${datos.name}</h5>
          <p class="card-text">${datos.description}</p>
          </div>
          <div class="precio">
            <h6>$${datos.price}</h6>
            <button type="button" class="btn-price"  onclick="location.href='./details.html?id=${datos._id} '">See more..</button>
          </div>
      </div>`;
     })
  divCards.innerHTML = cards;
}


