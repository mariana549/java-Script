function fatorial(n){
    let fat=1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat 
}
console.log(fatorial(5))
//o contador vai começar n(5) e enquanto o contador for maior que 1(c > 1), o contador perde 1(c--)
//5! = 5*4*3*2*1
