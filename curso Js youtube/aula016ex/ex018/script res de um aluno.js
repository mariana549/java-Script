    let num = document.querySelector('input#num')
    let caix = document.getElementById("caix")
    let res = document.getElementById("div#res") 
    let numeros = []

function adicionar(){
    let numv = Number(num.value)
    if (numeros.indexOf(numv) == -1 && numv >0 && numv <= 100){
        numeros.push(numv)
        let posi = numeros.indexOf(numv)
        let item = document.createElement('option')
        item.text = `o valor ${numeros[pos]} foi adiconado.`
        sel.appendChild(item)
    } else {
        window.alert("valor invalido na lista ou ja existente!")
}  num.value = ""
   num.focus()
   res.innerHTML = ""
}

function finalizar(){
    let maior = menos = numeros[0]
    let soma = media = 0
    let elementos = numeros.length //numero de elementos

    if (elementos == 0){
        alert('adicione valores para finalizar!')
    } else {
        for (let x in numeros){
            //maior numero digitado
        if (numeros [x]>maior){    
            maior = numeros[x]
        }
         if (numeros[x] < menor){
                //menor numero digitado
                menor = numeros[x]
           }  
           if (soma += numeros[x]){
                // soma entre os valores digitados

            }
           }   
        media = soma / elementos // media entre os elementos
        res.innerHTML= `<p> Ao todo temos ${elementos} numeros cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> a media dos valores digitados é ${media}</p>`
    }      
     //ele criou um botão de reiniciar mais eu coloquei aqui
     
    
}