// Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.

function tabuada(numero){
   for (let i = 0; i <= 10; i++){
     let resultado = numero * i
     console.log( numero + " * " + i + " = " + resultado)
   }
}

tabuada(10)