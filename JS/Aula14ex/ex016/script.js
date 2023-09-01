function contagem(){
    let inicio = window.document.getElementById("txtinicio")
    let fim = window.document.getElementById("txtfim")
    let passo = window.document.getElementById("txtpasso")
    let res = document.getElementById("resultado")


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam Dados!")
    } else {
        res.innerHTML = "Contando: "
        let numinicio = Number(inicio.value)
        let numfim = Number(fim.value)
        let numpasso = Number(passo.value)

        if (inicio < fim){
            // Contagem Crescente
            for(let c = numinicio; c <= numfim; c += numpasso) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = numinicio; c >= numfim; c -= numpasso) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
    

