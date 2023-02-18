function tabuada(){
    var num= window.document.getElementById('num')
    var res= window.document.getElementById('seltab')
    //num.value.length siginifica que se o valor do comprimento de num for igual a 0 
    if (num.value.length == 0){
       alert('[ERRO]Por favor coloque um numero!')
    } else {
        var n= Number(num.value)
        var c=1 
        res.innerHTML=" "
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
    }
    

