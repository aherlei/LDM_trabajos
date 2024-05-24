const btn   = document.getElementById("btn")
const btn_palin = document.getElementById("btn-palin")
const create_palin = document.getElementById("create_palin")

btn.addEventListener("click", palindromo);

function palindromo(){ 
    let string = document.getElementById("string")
    let resultado = document.getElementById("resultado")
    let stringReves = string.value.split('').reverse().join('');
    console.log(stringReves)

    if (string.value == "") {
        resultado.innerHTML = "<span class='text-danger'>Campo vacio.</span>"
    }
    else if (stringReves == string.value) {
        resultado.innerHTML = "Es palindromo"
        create_palin.innerHTML = ""
    }else {
        resultado.innerHTML = "<span class='text-danger'>No es palindromo.</span>"
        create_palin.innerHTML = "<button type='button' id='btn-palin'  class='btn btn-dark'>Generar Palindromo</button>"
    }
    return string.value + stringReves

}

create_palin.addEventListener("click" , ()=>{

    create_palin.innerHTML = ""
    return string.value = palindromo()

})

    
