// Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.

function soma(numero){
   let somar = numero
   for(let i = 1; i <= 10; i++){
      somar += numero / i
      console.log(somar)
   }

}

soma(1)