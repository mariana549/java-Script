    let num = document.querySelector('input#num')
    let caix = document.getElementById("caix")
    let res = document.getElementById("div#res") 
    let valores = []

function isnumer(n) {
        if(Number (n) >= 1 && Number (n) <=100){
            return true
        } else {
            return false
        }
}
function incaix (n, l) {
        if (l.indexOf(Number(n)) != -1){
            return true
        } else {11
            return false
        }
}

function adicionar(){

    if (isnumer(num.value) && !incaix(num.value, valores)){
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `o valor ${num.value} foi adiconado.`
      caix.appendChild(item)
      res.innerHTML = ''
} else {
        window.alert("valor invalido na lista ou ja existente!")
}
        num.value = ""
        num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('adicione valores para finalizar!')
    } else {
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores [pos]>maior)
            maior = valores[pos]
            if (valores[pos]< menor)
            menor = valores[pos]
        } 
        media = soma / tot
        res.innerHTML= ''
        res.innerHTML= `<p> Ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> a media dos valores digitados é ${media}</p>`
    }       //exercicio feito pelo o guanabara

    
}