const btn   = document.getElementById("btn")
btn.addEventListener("click", diviEuclides)
// const btnDark = document.addEventListener("click", modoOscuro)
// const btnLight = document.addEventListener("click", modoClaro)

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

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

darkButton.addEventListener('click', function() {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
});

lightButton.addEventListener('click', function() {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
});
