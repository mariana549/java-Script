function carregar() {
    var msg= window.document.getElementById("msg")
    var img= window.document.getElementById("imagem")
    var data= new Date()
    var hora= data.getHours ()
    //var hora= 10
    img.innerHTML = `agora são ${hora}horas.` 
 if (hora >= 0 && hora < 12) {
    //bom dia!
    img.src ="fotomanha.png"
} else if (hora >= 12 && hora <= 18) {
    //boa tarde!!
    img.src = "fototarde.png"
} else if (hora >= 19 && hora <=23){
    //boa noite !!
    img.src = "fotonoite.png"
} else {
    console.log("não existe")
}
}
