const btn   = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    const lado1 = document.getElementById("lado1").value
    const lado2 = document.getElementById("lado2").value
    const lado3 = document.getElementById("lado3").value
    const resultado = document.getElementById("resultado")

    
    if (lado1 !== "" && lado2 !== "" && lado3 !== "") { 
        console.log("vacio")
        
        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
            resultado.innerHTML = "<span class='text-danger'> Introduzca números, por favor </span>"
        } else if (lado1 === lado2 && lado2 === lado3) {
            resultado.innerHTML = "Es equilátero";
        } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
            resultado.innerHTML = "Es escaleno";
        } else {
            resultado.innerHTML = "Es isósceles";
        }

    } else {
        resultado.innerHTML = "<span class='text-danger'> Alguno de los campos esta vacio </span>"
    }

})