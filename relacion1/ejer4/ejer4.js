function calculoLetra() {
    
    const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE"
    const dni = parseInt(document.getElementById("dni").value)

    let resto = dni%23
    document.getElementById("resultado").innerHTML = `La letra es ${LETRA[resto]}`;
    alert()
    return false
}