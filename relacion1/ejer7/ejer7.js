const btn   = document.getElementById("btn")
btn.addEventListener("click", diviEuclides)

function diviEuclides() {
    
    let divi  = document.getElementById("dividendo").value
    let disor = document.getElementById("divisor").value
    let cociente = 0;
    let resto;

    if (divi !== "" && disor !== "") { 
        
        if (isNaN(divi) || isNaN(disor)) {
            resultado.innerHTML = "<span class='text-danger'> Introduzca números, por favor </span>"
        }else {
            while(divi >= disor){
                
                divi -= disor;
                cociente++;
                console.log(resto)
                    
            }
            document.getElementById("resultado").innerHTML = `el cociente es : ${cociente} y el resto: ${resto} `;
        }

    } else {
        resultado.innerHTML = "<span class='text-danger'> Alguno de los campos esta vacio </span>"
    }
    
    
  
}