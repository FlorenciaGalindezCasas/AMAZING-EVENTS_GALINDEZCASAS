const divCards = document.getElementById('cards')

let cards = ''

for(datos of data.events){
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
              <button type="button" class="btn-price"  onclick="location.href='./details.html '">See more..</button>
            </div>
        </div>`
}

console.log(cards);

divCards.innerHTML = cards;