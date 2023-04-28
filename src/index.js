import validator from "./validator.js";

// Obtención de los elementos del DOM
const abrir = document.getElementById("abrir");
const presentacion = document.getElementById("presentacion");
const comprar = document.getElementById("comprar");
const carritoCompras = document.getElementById("carritoCompras");
const botonPagar = document.getElementById("botonPagar");
const formularioDePago = document.getElementById("formularioDePago");
const content = document.getElementById("content");
const pagar = document.getElementById("pagar");
const respuesta = document.getElementById("respuesta");
const obtenHeader = document.getElementById("superior");
const obtenFooter = document.getElementById("pie");
const validacion = document.getElementById("validacion")
// Llamado de clase común al abrir las modales


// Apagado de modales 

presentacion.style.display = "none";
carritoCompras.style.display = "none";
formularioDePago.style.display = "none";
validacion.style.display = "none";


//Ejecución deeEventos del DOM
abrir.addEventListener("click", () => {
  presentacion.style.display = "block"; 
  content.classList.add("opacidadFondo");
  obtenFooter.classList.add("opacidadFondo");
  obtenHeader.classList.add("opacidadFondo");
});

comprar.addEventListener("click", () => {
  carritoCompras.style.display = "block";
  presentacion.style.display = "none";
  content.classList.add("opacidadFondo");
  obtenFooter.classList.add("opacidadFondo");
  obtenHeader.classList.add("opacidadFondo");
  
});

botonPagar.addEventListener("click", () => {
  formularioDePago.style.display = "block";
  carritoCompras.style.display = "none";
  content.classList.add("opacidadFondo");
  obtenFooter.classList.add("opacidadFondo");
  obtenHeader.classList.add("opacidadFondo");
});

pagar.addEventListener("click", () => {
  formularioDePago.style.display = "none";
  content.classList.add("opacidadFondo");
  obtenFooter.classList.add("opacidadFondo");
  obtenHeader.classList.add("opacidadFondo");
  validacion.style.display = "block";


  //resto.style.display = "block";
  const obtenNumero = document.getElementById("tdcNumber").value;
  const tarjetaValida = validator.isValid(obtenNumero);
  const tarjetaMascara = validator.maskify(obtenNumero);
  /*respuesta.classList.add("prendeRespuesta") + presentacion.classList.add("frutas") + contenido.classList.add("frutas") + obtenFooter.classList.add("frutas") + obtenHeader.classList.add("frutas");*/

  if (obtenNumero === "") {
    respuesta.textContent = "Debe ingresar el número de la tarjeta";
    return;
  } else if (obtenNumero.length < 10) {
    respuesta.textContent = "El número ingresado es incorrecto";
    return;
  }

  if (tarjetaValida === true) {
    respuesta.textContent = "tu tarjeta " + tarjetaMascara + " es válida";
  } else {
    respuesta.textContent = "La tarjeta " + tarjetaMascara + " es inválida";
  }
});
