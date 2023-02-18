var agora= new Date ()//use o new Date para pegar as horas atuais ou dat etc.. do sistema que tiver rodando 
var hora = agora.getHours()//ai você coloca .get e escolhe se quer horas minutos etc..       
console.log(`ja são: ${hora}hrs que voçê tenha `)
if (hora >5 && hora <=11){
    console.log(`um bom dia!`)
} else if (hora >=12 && hora <=17){
        console.log(`uma boa tarde!`)
    } else if (hora >= 18 && hora <=23)  {
    console.log('uma boa noite!')
}else {
    console.log(`uma boa madrugada!`)
}

