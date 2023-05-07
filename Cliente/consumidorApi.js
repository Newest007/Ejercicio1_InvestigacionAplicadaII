
let url = 'http://127.0.0.1:8000/api/cupones';

let jsonData = 0;



function buscar(){
  
  let id = document.getElementById("idInput").value;

    fetch('http://127.0.0.1:8000/api/cupones/' + id)
        .then(datos => datos.json())
        .then(data => {
         verCupon(data);
        });

}


function verCupon(cuponId){

  //Definimos las constantes de los elementos de la card

  const titulo = document.getElementById("titulo");
  const cod = document.getElementById("codigo");
  const estado = document.getElementById("estado");
  const desc = document.getElementById("descripcion");
  const preOfera = document.getElementById("precioOferta");
  const preNormal = document.getElementById("precioNormal");
  const cadu = document.getElementById("caducidad");

  cuponId.forEach(element => {
    titulo.innerHTML = cuponId[0].titulo;
    cod.innerHTML = cuponId[0].idcupon;
    estado.innerHTML = "Estado: " + cuponId[0].estado;
    desc.innerHTML = cuponId[0].descripcion;
    preOfera.innerHTML = "Precio oferta: " + cuponId[0].precio_oferta + "$";
    preNormal.innerHTML = "Precio Normal: " + cuponId[0].precio_regular + "$";
    cadu.innerHTML = "Caducidad: " + cuponId[0].fecha_caducidad;

    
  });
  
}

function canjear(){

  let id = document.getElementById("idInput").value;

    fetch('http://127.0.0.1:8000/api/cupones/' + id,{
      method: 'PUT',
    })
        .then(datos => datos.json())
        .then(data => {
         console.log(data);
        });

}


//buscar();