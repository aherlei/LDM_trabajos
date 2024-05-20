const btn   = document.getElementById("btn")

btn.addEventListener("click", calcular)

function calcular(){
    let radio = parseFloat(document.getElementById("radio").value);
    
    let resultado ;
    let resultado1;
    let resultado2;

    if (isNaN(radio)) {
        document.getElementById("resultado").innerHTML =
        "<span class='text-danger'>El resultado no es un numero</span>"
    } else {
        resultado = radio + Math.PI;
        resultado1 = (Math.PI * 2)^2;
        resultado2 = (Math.PI * (radio ^ 2))
        
        document.getElementsByTagName("p")[0].innerHTML = `<span class="text-danger">La Longitud es ${resultado.toPrecision(3)}</span>`;

        document.getElementsByTagName("p")[1].innerHTML = `<span class="text-danger">El Área es ${resultado1}</span>`;
        document.getElementsByTagName("p")[2].innerHTML = `<span class="text-danger">El Volumen es ${resultado2.toPrecision(3)}</span>`;

        radio = 0;
    }

}