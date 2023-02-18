let v = [1,12,6,7]//a contagem das chaves começa do 0.
v[4]=24//é para colocar um numero na posição escolhida no caso o 24 na posição 4.
v.push(55)//é para colocar um numero na ultima possição 
v.sort()//não está funcionado. .no caso seria para por em ordem!.
//console.log(`o vetor tem ${v} posições`)//pode ser assim tbm console.log(v)vai da no mesmo.
//console.log(v[4])//e para mostra que numero está na possição determinada!.
//console.log(v.length) essa e para saber quantos elementos tem 
let pos= v.indexOf(22)//uma forma mais bonita é assim
if (pos == -1){
    console.log(`não possui o valor!`)
} else {
    console.log(`o valor da posição 12 é ${pos}!`)
}


