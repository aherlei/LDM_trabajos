const btn   = document.getElementById("btn")

btn.addEventListener("click", ()=>{ 
    let string = document.getElementById("string")
    let resultado = document.getElementById("resultado")
    let stringReves = string.value.split('').reverse().join('');

    if (string.value == "") {
        resultado.innerHTML = "<span class='text-danger'>Campo vacio</span>"
    }
    else if (stringReves == string.value) {
        resultado.innerHTML = "Es palindromo"
    }else {
        resultado.innerHTML = "<span class='text-danger'>No es palindromo</span>"

    }
})