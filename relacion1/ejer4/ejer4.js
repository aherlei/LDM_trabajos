const btn   = document.getElementById("btn")
const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE"

btn.addEventListener("click", ()=>{
    const dni = document.getElementById("dni").value
    let respuesta = document.getElementById("resultado")
    
    if (isNaN(dni)) {
        respuesta.innerHTML = "<span class='text-danger'> Introduzca números, por favor </span>"
    }else if ( dni.length !== 8 ) {
        respuesta.innerHTML = "<span class='text-danger'> Introduzca 7 números </span>"
    } else {
        let resto = dni%23
        respuesta.innerHTML = `La letra es ${LETRA[resto]}`;
        // alert(isNaN(dni))   
    }

})