// Faça um programa que leia três valores (A, B, C) e mostre-os na ordem lida.  Em seguida, mostre-os em ordem crescente e decrescente.

function valores(numero1, numero2, numero3) {
   console.log("ordem lida: ", numero1, numero2, numero3);
   
   let menor, meio, maior;

   if(numero1 < numero2 && numero1 < numero3){
      menor = numero1
      if(numero2 < numero3){
         meio = numero2;
         maior = numero3;
      } else {
         meio = numero3;
         maior = numero2;
      }
   } else if(numero2 < numero1 && numero2 < numero3){
      menor = numero2;
      if(numero1 < numero3){
         meio = numero1;
         maior = numero3;
      } else {
         meio = numero3;
         maior = numero1;
      }
   } else {
      menor = numero3;
      if(numero1 < numero2){
         meio = numero1;
         maior = numero2;
      } else {
         meio = numero2;
         maior = numero1;
      }
   }
   console.log("ordem cresente: ", menor, meio, maior);
   console.log("ondem decresente: ", maior, meio, menor);
}


valores(10,5,8)