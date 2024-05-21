const btn   = document.getElementById("btn")

btn.addEventListener("click", ()=>{ 
    let string = document.getElementById("string")
    let resultado = document.getElementById("resultado")

    if (string.value == "" | !isNaN(parseInt(string.value)) ) {
        resultado.innerHTML = "<span class='text-danger'>No es un String o campo vacío</span>"
    } else if (string.value.toUpperCase() === string.value) {
        resultado.innerHTML = "Mayus"
    } else {
        resultado.innerHTML = "Minus"
    }

})