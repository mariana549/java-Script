function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("div#res")
    if (fano.ariaValueMax.length == 0|| fano.valeu > ano){
        window.alert("[ERRO] verifique os dados novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerhtml = `idade calculada: ${idade}`
    }
}
