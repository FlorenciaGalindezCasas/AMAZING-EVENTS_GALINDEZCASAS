const url = "https://mindhub-xj03.onrender.com/api/amazing";

let arrayEventos = [];

async function getData() {
  let data = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      let dataJson = fetch("http://127.0.0.1:5502/amazing.json")
      .then((response) => response.json())
      .then((dataJson) => {
      return dataJson;
    })
    return dataJson
  })
  console.log(data);
  return data;
}

