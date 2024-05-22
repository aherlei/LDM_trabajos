const btn   = document.getElementById("btn")

function diviEuclides() {
    
    let divi  = parseInt(document.getElementById("dividendo").value)
    let disor = parseInt(document.getElementById("divisor").value)
    let cociente = 0;
    let resto;
    
    while(divi >= disor){
        divi -= disor;
        cociente++;
        
    }
    document.getElementById("resultado").innerHTML = `el cociente es : ${cociente} y el resto: ${resto} `;
  

    return false;
}