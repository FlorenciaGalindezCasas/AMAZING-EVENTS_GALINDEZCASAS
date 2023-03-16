const urlSearchParams = new URLSearchParams(window.location.search);
let detailId = urlSearchParams.get("id");
const divDet = document.getElementById("contdet");

function detailsFilter(eventos){
   let detFiltrado = eventos.filter(datos => datos._id === parseInt(detailId))
   console.log(detFiltrado)
   return detFiltrado
}

details(detailsFilter(data.events))

function details(eventos) {
  let detalles = "";
  eventos.forEach((datos) => {
    detalles += `<div class="row" id="details">
            <div class="col-sm-8" id="imgdet">
                <img src="${datos.image}" alt="">
            </div>
            <div class="col-sm-4" id="text">
                <h3>${datos.name}</h3>
                <p style="color: #e0046c"><b>${datos.date}</b></p>
                <p><b>${datos.category}</b></p>
                <p>${datos.description}</p>
                <p>${datos.place}</p>
              <h5>Price: $${datos.price}</h5>
            </div>
        </div>`;
  });
  divDet.innerHTML = detalles;
}

