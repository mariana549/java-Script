// Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por 11 produzam resto igual a 2.

for (var i = 1000; i <= 2000; i++) {
   let resultado = i * 11
   if (resultado % 2 == 0){
      console.log(resultado)
   }
}