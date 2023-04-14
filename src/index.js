const tdc = document.getElementById("tdc");
//const numero = querySelector("#tdc")

tdc.addEventListener("click", () => {
  return alert("holis")
}) 

//const expresiones= {

 // NumeroTdc: /^\d{1,16}$/

//const numero = addEventListener(keydown, ){

function maskify(texto, n = 12, mascara = '#') {
  if (typeof texto != 'string') {
      throw TypeError('El argumento «texto» debe ser una cadena de caracteres.');
  }
  
  if (typeof n != 'number' || !Number.isInteger(n)) {
      throw TypeError('El argumento «texto» debe ser un número entero.');
  }

  if (typeof mascara != 'string') {
      throw TypeError('El argumento «mascara» debe ser una cadena de caracteres.');
  }

  return ('' + texto).slice(0, n).replace(/./g, mascara) + ('' + texto).slice(n);
}

  console.log(maskify('0256975412369854')); // $$$DEFGHIJ
































/*(function() {
  card = {
    // Funcion que valida la longitud del input ingresado por el usuario
    validNumber(input) {
      let regex = /^\d*$/;
      if (!input.search(regex))
        return input;
      else return false;
    }
      validCard(numberCard) {
        if (numberCard) {
            let sumaTotal = 0;
            let revserNum = [...numberCard].reverse(); // obteniendo array inverso  
            for (let index = 1; index < revserNum.length; index = index + 2) {
            revserNum[index] = revserNum[index] * 2;
            if (revserNum[index] >= 10) {
                revserNum[index] = revserNum[index] - 9;
            }
            }
            for (let value of revserNum) {
            sumaTotal = sumaTotal + parseInt(value);
            }
            if (sumaTotal % 10 === 0) {
            return true;
            console.log('Es una tarjeta valida');*/

            /*let creditCard = document.getElementById('input')
              1
            celular.addEventListener('keypress', (event) => {
              event.preventDefault()
              // console.log(event.keyCode)
              let valorTecla = String.fromCharCode(event.keyCode)
              console.log(valorTecla)
              let valorParsed = parseInt(valorTecla)
              // console.log(valorParsed)
              if(valorParsed) {
                input.value = input.value + valorParsed
              }
            })*/




            
  




            







/*const pago =addEventListener("Pagar"){
    function action ()      
        
        cuenta = 0
        numero = document.getElementById(number){ 
            rever = number.reverse() {
                for( let i=0; i < rever.length; i++){
                    (rever[i] ){                             //esta en la posición par 
                        cuenta += rever [i]
                    }
                         
                    }
                   


            }
        
        
            (numero[2,4,6,8,10,12,14,16] )
        

    
    }
}













import validator from './validator.js';
console.log(validator);*/
