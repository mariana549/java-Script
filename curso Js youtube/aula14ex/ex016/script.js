
function contar() {
    let ini = window.document.getElementById('num1')
    let fim = window.document.getElementById('num2')
    let pass = window.document.getElementById('passo')
    var res = window.document.getElementById('res') 
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
          window.alert("[ERRO] faltam dados!")
    } else {
         res.innerHTML = 'contando: <br>'
         let i = Number(ini.value)
         let f = Number(fim.value)
         let p = Number(pass.value) 
        if (p == 0){
            window.alert('passo invalido! (vamos considerar como passo 1)')
            p = 1
        }
         if (i < f){
            //contagem cresente
              for (let c = i; c <= f;c += p) {
            res.innerHTML += `${c} \u{1F91C}`
         } 
        } else {
            //contagem regreciva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F91C}`
            }
        } res.innerHTML += `\u{1F3CC}`
    }
}