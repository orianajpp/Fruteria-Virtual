import validator from "./validator.js";

// Obtención de los elementos del DOM
const abrir = document.getElementById("abrir");
const presentacion = document.getElementById("presentacion");
const comprar = document.getElementById("comprar");
const carritoCompras = document.getElementById("carritoCompras");
const botonPagar = document.getElementById("botonPagar");
const formularioDePago = document.getElementById("formularioDePago");
const contenido = document.getElementById("contenido");
const pagar = document.getElementById("pagar");
const respuesta = document.getElementById("respuesta");

const obtenHeader = document.getElementById("superior");
const obtenFooter = document.getElementById("pie");

//Ejecución deeEventos del DOM
abrir.addEventListener("click", () => {
  presentacion.classList.add("prende-presentacion") +
    contenido.classList.add("frutas") +
    obtenFooter.classList.add("frutas") +
    obtenHeader.classList.add("frutas");
});

comprar.addEventListener("click", () => {
  carritoCompras.classList.add("prendeCarritoCompras") +
    presentacion.classList.add("frutas") +
    contenido.classList.add("frutas") +
    obtenFooter.classList.add("frutas") +
    obtenHeader.classList.add("frutas");
});

botonPagar.addEventListener("click", () => {
  formularioDePago.classList.add("prendeFormulario") +
    presentacion.classList.add("frutas") +
    contenido.classList.add("frutas") +
    obtenFooter.classList.add("frutas") +
    obtenHeader.classList.add("frutas");
});
/*pagar.addEventListener("click", () => {
  respuesta.classList.add("prendeRespuesta") + presentacion.classList.add("frutas") + contenido.classList.add("frutas") + obtenFooter.classList.add("frutas") + obtenHeader.classList.add("frutas");
});*/
pagar.addEventListener("click", () => {
  
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
