function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'dia.jpg'
        document.body.style.background = "#998D81"
    } else if (hora >= 12 && hora < 18){
        //Boa Tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = "#A26D56"
    } else {
        //Boa Noite!
        img.src = 'noite.jpg'
        document.body.style.background = "#111317"
    }
}