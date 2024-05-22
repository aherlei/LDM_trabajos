const btn   = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    const lado1 = document.getElementById("lado1").value
    const lado2 = document.getElementById("lado2").value
    const lado3 = document.getElementById("lado3").value
    const resultado = document.getElementById("resultado")

    
    if (lado1 == "" || lado2 == "" || lado3 == "") { 
        resultado.innerHTML = "<span class='text-danger'> Alguno de los campos esta vacio </span>"
    } else if (lado1 != NaN || lado2 != NaN || lado3 != NaN) {
        resultado.innerHTML = "<span class='text-danger'> No se introducjo ningun dato o el dato es erroneo </span>"
    } else if (lado1 == lado2 && lado1 == lado3) {
        resultado.innerHTML = "Es equilatero"
    } else if (lado1 != lado2 && lado1 != lado3) {
        resultado.innerHTML = "Es escaleno"
    } else if  ((lado1 == lado2 || lado2 != lado3) ||
                (lado1 == lado3 || lado3 != lado2) || 
                (lado2 == lado3 || lado1 != lado2)) {
        resultado.innerHTML = "Es isosceles"
    }

})