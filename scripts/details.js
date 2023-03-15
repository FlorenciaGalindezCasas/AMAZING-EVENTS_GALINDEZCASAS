const divDet = document.getElementById("contdet");

function details(eventos){
    let detalles=''
    eventos.forEach(datos => {
        detalles += `<div class="row" id="details">
            <div class="col-sm-8" id="imgdet">
                <img src="${datos.image}" alt="">
            </div>
            <div class="col-sm-4" id="text">
                <h4>${datos.name}</h4>
                <p>${datos.date}</p>
                <p>${datos.category}</p>
                <p>${datos.description}</p>
                <p>${datos.place}</p>
                <p>Capacity: ${datos.capacity}</p>
                <p>Assistance: ${datos.assistance}</p>
                <div class="precio">
            <h6>Price: $${datos.price}</h6>
          </div>
            </div>
        </div>`;
    })
    divDet.innerHTML = detalles
}

details(data.events)


