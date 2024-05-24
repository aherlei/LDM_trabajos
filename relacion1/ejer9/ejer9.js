const btn   = document.getElementById("diaSemana").addEventListener("change", semana)

function semana() {

    let resultado = document.getElementById("resultado")
    /* Aqui el array lo cojo desde el DOM */
    const nSemana = document.getElementById("diaSemana")
    const diaSemana = nSemana[nSemana.value].text 

    resultado.innerHTML = `Dia seleccionado ${diaSemana=="..."?" Elija un día ":diaSemana}`
}