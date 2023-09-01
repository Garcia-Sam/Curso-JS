function gerar(){
var numero = document.getElementById("txtnum")
var tabu = document.getElementById("seltab")

if(numero.value.length == '0'){
    alert("Por favor, digite um número!")
} else {
    tabu.innerHTML = ""
    let num = Number(numero.value)
    for(let c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`
        tabu.appendChild(item)
    }
}
}