const validator = {                                                      // defino la función validate que debe retornar true o false
    
  isValid : function(creditCardNumber) {
    if (/^([0-9])*$/.test(creditCardNumber) === false){
      return false
    }
    else{       
    
      const arrayCreditCardNumber = creditCardNumber.split("");                      //el string lo transformo en array
      const reverseArrayCreditCardNumber = arrayCreditCardNumber.reverse();          //el array lo invierto
      let result = 0
      for(let i= 0; i < reverseArrayCreditCardNumber.length; i++){                   //recorro el array para realizar la siguiente verificación de cada valor del array
        if( i % 2 !== 0){                                                          
          const impar = (reverseArrayCreditCardNumber[i]*2);                          // a los valores de los indices impares (posición par) los multiplico por 2 
          if (impar >= 10 ){                                                         //estableco una segunda condición: si el resultado es mayor o igual a 10 
            const arrayImpar = impar.toString().split("");                             //obtengo un string y lo convierto en array 
            result += Number(arrayImpar[0]) + Number(arrayImpar[1]);                   //resultado lo paso a numero 
          }
          else{
            result += Number(reverseArrayCreditCardNumber[i]*2);                     
          }
        
        }
        else{ 
          result += Number(reverseArrayCreditCardNumber[i]);                         //resultado de la suma del indice que no se toca
        }
      }
      if (result % 10 === 0){                                                        //operación para verificar que el resultado es múltiplo de 10
        return true;                                                                 //return exigidos
      }
      else{
        return false;
      }

    }
  },

  maskify : function(creditCardNumber){
    const mascara = creditCardNumber.slice(0, -4).replace(/./g, "#") + creditCardNumber.slice(-4);  // enmascaramiento
    return mascara;
  }
}

/*
    else if (creditCardNumber.length < 10 === true){
    
    }*/




export default validator;