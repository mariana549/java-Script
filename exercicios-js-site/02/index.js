// Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.


function tababuada(numero, operacao){
   if(operacao == "+"){
      for (let i = 0; i <= 10; i++) {
         let resultado = numero + i;
         console.log( numero + " + " + i + " = " + resultado)
   }
   }else if(operacao == "-"){
      for (let i = 0; i <= 10; i++) {
         let resultado = numero - i;
         console.log( numero + " - " + i + " = " + resultado)
      }      
   }else if(operacao == "*"){
      for (let i = 0; i <= 10; i++) {
         let resultado = numero * i;
         console.log( numero + " * " + i + " = " + resultado)
      }      
   }else if(operacao == "/"){
      for (let i = 0; i <= 10; i++) {
         let resultado = numero / i;
         console.log( numero + " / " + i + " = " + resultado)
      }
   }else {
      console.log('Invalida operação tente( - , + , * ou /) ')
   }     
}

tababuada(50, "=")